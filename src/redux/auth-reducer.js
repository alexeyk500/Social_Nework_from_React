import {serverApi} from './../api/api'
import {stopSubmit} from "redux-form";

// actions constant
const SET_USER_DATA = 'SET_USER_DATA';

// Инициализационное состояние
const initialState = {
  id: null,
  email: null,
  login: null,
  isAuthoraised: false,

  // https://social-network.samuraijs.com/api/1.0/auth/me
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
        ...state, ...action.userData
      }
    };
    default: return state;
  }
};

// actions creators
const setAuthUsersData = (id, email, login, isAuthoraised)  => ({
  type:SET_USER_DATA, userData: {id, email, login, isAuthoraised}});

//thunk
export const setAuthoraisedUsersData = () => {
  return(dispatch) => {
    return serverApi.authoraise_me().then(response =>{
      if (response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setAuthUsersData(id, email, login, true));
      }
    })
  }
};

export const login = (email, password, rememberMe) => {
  return(dispatch) => {
    serverApi.login_me(email, password, rememberMe).then(response =>{
      if (response.resultCode === 0) {
        dispatch(setAuthoraisedUsersData());
      } else {
        const error_message = response.messages.length > 0 ? response.messages[0] : 'Some other Error'
        dispatch(stopSubmit('login',{_error: error_message}));
      }
    })
  }
};

export const logout = () => {
  return(dispatch) => {
    serverApi.logout_me().then(response =>{
      if (response.resultCode === 0) {
        dispatch(setAuthUsersData(null, null, null, false));
      }
    })
  }
};

export default authReducer;
