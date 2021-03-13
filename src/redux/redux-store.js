import { combineReducers, createStore, applyMiddleware } from "redux";
import profilePageReducer from './profilePage-reducer';
import dialogsPageReducer from './dialogsPage-reducer';
import usersPageReducer   from './userPage-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers ({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
