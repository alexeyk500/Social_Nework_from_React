import {serverApi} from './../api/api';

// actions constant
const FOLLOW    = 'FOLLOW';
const UNFOLLOW  = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

// Инициализационное состояние
const initialState = {
  users:[],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  isFollowingInProgress: [],

  // https://social-network.samuraijs.com/api/1.0/users?page=2540&count=1
  // {
  //   "items": [
  //     {
  //       "name": "BoB",
  //       "id": 12977,
  //       "uniqueUrlName": null,
  //       "photos": {
  //         "small": null,
  //         "large": null
  //       },
  //       "status": null,
  //       "followed": false
  //     }
  //   ],
  //   "totalCount": 10524,
  //   "error": null
  // }
};

// Выбор возможных действий
export const userPageReducer = (state=initialState, action) => {
  switch(action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(curUser => {
          if (curUser.id === action.id) {
            return {...curUser, followed: true}
          }
          return curUser
        })
      }
    };
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(curUser => {
          if (curUser.id === action.id) {
            return {...curUser, followed: false}
          }
          return curUser
        })
      }
    };
    case SET_USERS: {
      return {
        ...state, users: action.users
      }
    };
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage}
    };
    case SET_TOTAL_USER_COUNT: {
      return { ...state, totalUsersCount: action.totalUserCount}
    }
    case SET_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching}
    };
    case FOLLOWING_IN_PROGRESS: {
      return {
        ...state,
        isFollowingInProgress: action.isFetching
        ? [...state.isFollowingInProgress, action.userId]
        : state.isFollowingInProgress.filter(id => id != action.userId)
      }
    };
    default: return state;
  }
};

// actions creators
export const followStatus   = (id) => {return {type:FOLLOW,    id}};
export const unfollowStatus = (id) => {return {type:UNFOLLOW,  id}};
export const setUsers = (users)  => {return {type:SET_USERS, users}};
export const setCurrentPage = (currentPage)  => {return {type:SET_CURRENT_PAGE, currentPage}};
export const setTotalUsersCount = (totalUserCount) => {return {type:SET_TOTAL_USER_COUNT, totalUserCount}};
export const setIsFetching = (isFetching) => {return {type:SET_IS_FETCHING, isFetching}};
export const setFollowingInProgress = (isFetching, userId) => {return {type:FOLLOWING_IN_PROGRESS, isFetching, userId}};

//thunks
export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));
    serverApi.getUsers(currentPage, pageSize)
    .then(data =>{
      dispatch(setIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    })
  }
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(setFollowingInProgress(true, userId));
    serverApi.unfollowUser(userId)
    .then(data =>{
      if (data.resultCode === 0) {
        dispatch(unfollowStatus(userId))
      }
      dispatch(setFollowingInProgress(false, userId));
    })
  }
};

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(setFollowingInProgress(true, userId));
    serverApi.followUser(userId)
    .then(data =>{
      if (data.resultCode === 0) {
        dispatch(followStatus(userId))
      }
      dispatch(setFollowingInProgress(false, userId));
    })
  }
};

export default userPageReducer;
