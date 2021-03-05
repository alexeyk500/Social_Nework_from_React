// actions constant
const FOLLOW    = 'FOLLOW';
const UNFOLLOW  = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

// Инициализационное состояние
const initialState = {
  users:[],
  // users:[
  //   { userId:1,
  //     userAvatar: './../img/Bruce.jpg',
  //     userName:'Ivan',
  //     userStatus:'I am a boss',
  //     userLocation: {country:'Russia', city:'Moscow'},
  //     followed: false,
  //   },
  //   { userId:2,
  //     userAvatarPath: './../img/Bruce.jpg',
  //     userName:'Olga',
  //     userStatus:'Tell me whay?',
  //     userLocation: {country:'Belarus', city:'Minsk'},
  //     followed: true,
  //   },
  //   { userId:3,
  //     userAvatar: './../img/Bruce.jpg',
  //     userName:'Arnold',
  //     userStatus:'Who am I?',
  //     userLocation: {country:'Austria', city:'Viena'},
  //     followed: true,
  //   },
  //   { userId:4,
  //     userAvatar: './../img/Bruce.jpg',
  //     userName:'Iveya',
  //     userStatus:'cut gerl )))',
  //     userLocation: {country:'Russia', city:'Piter'},
  //     followed: false,
  //   },
  // ],
};

// Выбор возможных действий
export const userPageReducer = (state=initialState, action) => {
  switch(action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(curUser => {
          if (curUser.userId === action.userId) {
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
          if (curUser.userId === action.userId) {
            return {...curUser, followed: false}
          }
          return curUser
        })
      }
    }
    case SET_USERS: {
      return {
        ...state, users: [ ...state.users, ...action.users ]
      }
    }
    default: return state;
  }

};

// actions creators
export const follow_AC   = (userId) => {return {type:FOLLOW,    userId}};
export const unfollow_AC = (userId) => {return {type:UNFOLLOW,  userId}};
export const setUsers_AC = (users)  => {return {type:SET_USERS, users}}

export default userPageReducer;
