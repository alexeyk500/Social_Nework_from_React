// actions constant
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

// store
let store = {
  _state: {
    profilePage: {
      posts: [{postId:1, postText:'Hi, how are you?'},
              {postId:2, postText:'Do you listen to me?'},
              {postId:3, postText:'Why do you not answer?'},
              {postId:4, postText:'blablabla - blablabla'},
              ],
      textNewPost: '',
    },

    dialogsPage :{
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
    },
  },
  _callSubscriber() {
    console.log('state has been changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer){
    this._callSubscriber = observer;
  },

  // dispatch
  dispatch(action){
    if (action.type === ADD_POST){
      let newPost = {postId:5, postText:this._state.profilePage.textNewPost};
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.textNewPost = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.textNewPost = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {messageId:4, messagetext:this._state.dialogsPage.newMessageText};
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);
    }
  }
};

// actions creators
export const ADD_POST_CREATOR = () => {
  return {type: ADD_POST};
};
export const UPDATE_NEW_POST_TEXT_CREATOR = (newText) => {
  return {type:UPDATE_NEW_POST_TEXT, newText:newText};
};
export const UPDATE_NEW_MESSAGE_TEXT_CREATOR = (newText) => {
  return {type:UPDATE_NEW_MESSAGE_TEXT, newText:newText};
};
export const SEND_MESSAGE_CREATOR = () => {
  return {type:SEND_MESSAGE};
};

export default store;
