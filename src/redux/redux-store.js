import { combineReducers, createStore } from "redux";
import profilePageReducer from './profilePage-reducer';
import dialogsPageReducer from './dialogsPage-reducer';

const reducers = combineReducers ({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
});

const store = createStore(reducers);

export default store;
