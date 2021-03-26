import {setAuthoraisedUsersData} from './auth-reducer'

// actions constant
const SET_INITIALIZED = 'SET_INITIALIZED';

// Инициализационное состояние
const initialState = {
  initialized: false,
};

// Выбор возможных действий
export const appReducer = (state=initialState, action) => {
  switch(action.type) {
    case SET_INITIALIZED: {
      return {
        ...state, initialized: true
      }
    };
    default: return state;
  }
};

// actions creators
export const setInitialized = ()  => ({type:SET_INITIALIZED});

//thunk
export const initializeApp = () => {
  return (dispatch) => {
    const promise = dispatch(setAuthoraisedUsersData());
    Promise.all([promise])
      .then(()=>{
        dispatch(setInitialized())
      })
  }
};

export default appReducer;
