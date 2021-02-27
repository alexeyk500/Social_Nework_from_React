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

// Выбор возможных действий
const dialogsPageReducer = (state, action) => {
  switch(action.type) {
    case SEND_MESSAGE: {
      let newMessage = {messageId:4, messagetext:state.newMessageText};
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      state.newMessageText = action.newText;
      return state;
    }
    default: return state;
  }
};

export default dialogsPageReducer;
