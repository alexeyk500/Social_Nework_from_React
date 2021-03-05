import { combineReducers, createStore } from "redux";
import profilePageReducer from './profilePage-reducer';
import dialogsPageReducer from './dialogsPage-reducer';
import usersPageReducer    from './userPage-reducer';

const reducers = combineReducers ({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  usersPage: usersPageReducer,
});

const store = createStore(reducers);

export default store;
