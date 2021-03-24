// actions constant
const ADD_MESSAGE = 'ADD-MESSAGE';

// Инициализационное состояние
const initialState = {
    dialogs: [{userId:1, userName:'Olga'},
              {userId:2, userName:'Ivan'},
              {userId:3, userName:'Kati'},
              {userId:4, userName:'Ange'},
              {userId:5, userName:'Iveya'},
              {userId:6, userName:'Stepan'},
              {userId:7, userName:'My'},
            ],
    messages: [{messageId:1, messagetext:'Hi'},
               {messageId:2, messagetext:'How is your day?'},
               {messageId:3, messagetext:'Will you come today?'},
              ],
};

// Выбор возможных действий
const dialogsPageReducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, {messageId:4, messagetext:action.newMessageText}],
      };
    }
    default: return state;
  }
};

// actions creators
export const ADD_MESSAGE_CREATOR = (newMessageText) => {
  return {type:ADD_MESSAGE, newMessageText};
};

export default dialogsPageReducer;
