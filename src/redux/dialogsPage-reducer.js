// actions constant
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

// actions creators
export const UPDATE_NEW_MESSAGE_TEXT_CREATOR = (newText) => {
  return {type:UPDATE_NEW_MESSAGE_TEXT, newText:newText};
};
export const SEND_MESSAGE_CREATOR = () => {
  return {type:SEND_MESSAGE};
};

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
    newMessageText: '',
};

// Выбор возможных действий
const dialogsPageReducer = (state=initialState, action) => {
  switch(action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, {messageId:4, messagetext:state.newMessageText}],
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.newText
      };
    }
    default: return state;
  }
};

export default dialogsPageReducer;
