import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import profilePageReducer from './profilePage-reducer';
import dialogsPageReducer from './dialogsPage-reducer';
import usersPageReducer   from './userPage-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer'
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers ({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

// Подключение state к расширению ReduxDevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// Оригинальное подключение State
//const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
