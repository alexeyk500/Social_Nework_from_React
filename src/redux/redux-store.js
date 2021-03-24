import { combineReducers, createStore, applyMiddleware } from "redux";
import profilePageReducer from './profilePage-reducer';
import dialogsPageReducer from './dialogsPage-reducer';
import usersPageReducer   from './userPage-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers ({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
  form: formReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
