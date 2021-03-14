import {serverApi} from './../api/api'

// actions constant
const SET_USER_DATA = 'SET_USER_DATA';

// Инициализационное состояние
const initialState = {
  id: null,
  email: null,
  login: null,
  isAuthoraised: false,

  // https://social-network.samuraijs.com/api/1.0//auth/me
  // {
  //   "data": {
  //   "id": 15662,
  //   "login": "alexeyk500",
  //   "email": "alexeyk500@yandex.ru"
  //   },
  //   "messages": [],
  //   "fieldsErrors": [],
  //   "resultCode": 0
  // }
};

// Выбор возможных действий
export const authReducer = (state=initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA: {
      return {
        ...state, ...action.userData, isAuthoraised: true
      }
    };
    default: return state;
  }
};

// actions creators
const setAuthUsersData = (id, email, login)  => ({type:SET_USER_DATA, userData: {id, email, login}});

//thunk
export const setAuthoraisedUsersData = () => {
  return(dispatch) => {
    serverApi.authoraise_me().then(response =>{
      if (response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setAuthUsersData(id, email, login));
      }
    })
  }
};

export default authReducer;
