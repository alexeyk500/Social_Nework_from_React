// actions constant
const FOLLOW    = 'FOLLOW';
const UNFOLLOW  = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

// Инициализационное состояние
const initialState = {
  users:[],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,

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
    }
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
    }
    case SET_USERS: {
      return {
        ...state, users: action.users
      }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage}
    }
    case SET_TOTAL_USER_COUNT: {
      return { ...state, totalUsersCount: action.totalUserCount}
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching}
    }
    default: return state;
  }

};

// actions creators
export const follow_AC   = (id) => {return {type:FOLLOW,    id}};
export const unfollow_AC = (id) => {return {type:UNFOLLOW,  id}};
export const setUsers_AC = (users)  => {return {type:SET_USERS, users}};
export const setCurrentPage_AC = (currentPage)  => {return {type:SET_CURRENT_PAGE, currentPage}};
export const setTotalUsersCount_AC = (totalUserCount) => {return {type:SET_TOTAL_USER_COUNT, totalUserCount}};
export const toggleIsFetching_AC = (isFetching) => {return {type:TOGGLE_IS_FETCHING, isFetching}}

export default userPageReducer;
