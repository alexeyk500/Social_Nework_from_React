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
    },
  },

  getState() {
    return this._state;
  },

  addPost() {
    let newPost = {postId:5, postText:this._state.profilePage.textNewPost};
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.textNewPost = '';
    this.reRenderDOM(this);
  },

  preSavePost(text){
    this._state.profilePage.textNewPost = text;
    this.reRenderDOM(this);
  },

  reRenderDOM() {
    console.log('state has been changed');
  },

  subscribe(observer){
    this.reRenderDOM = observer;
  },

};

export default store;
