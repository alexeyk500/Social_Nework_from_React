import profilePageReducer from './profilePage-reducer';
import dialogsPageReducer from './dialogsPage-reducer';

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
    this._state.profilePage = profilePageReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  }
};

export default store;
