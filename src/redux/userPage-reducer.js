// actions constant
const FOLLOW    = 'FOLLOW';
const UNFOLLOW  = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

// Инициализационное состояние
const initialState = {
  users:[],
  // item
  // {
  //   "name": "vladislav13",
  //   "id": 15495,
  //   "uniqueUrlName": null,
  //   "photos": {
  //     "small": null,
  //     "large": null
  //   },
  //   "status": null,
  //   "followed": false
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
        ...state, users: [ ...action.users ]
      }
    }
    default: return state;
  }

};

// actions creators
export const follow_AC   = (id) => {return {type:FOLLOW,    id}};
export const unfollow_AC = (id) => {return {type:UNFOLLOW,  id}};
export const setUsers_AC = (users)  => {return {type:SET_USERS, users}}

export default userPageReducer;
