// actions constant
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

// Инициализационное состояние
const initialState = {
    posts: [{postId:1, postText:'Hi, how are you?'},
            {postId:2, postText:'Do you listen to me?'},
            {postId:3, postText:'Why do you not answer?'},
            {postId:4, postText:'blablabla - blablabla'},
            ],
    textNewPost: '',
    profile: null,
};

// Выбор возможных действий
export const profilePageReducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_POST: {
      return {
        ...state,
        textNewPost: '',
        posts: [...state.posts, {postId:5, postText:state.textNewPost}],
      }
    };

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        textNewPost: action.newText
      }
    };

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile}
    };
    default: return state;
  }
};

// actions creators
export const ADD_POST_CREATOR = () => { return{type: ADD_POST} };
export const UPDATE_NEW_POST_TEXT_CREATOR = (newText) => { return{type:UPDATE_NEW_POST_TEXT, newText:newText} };
export const setUserProfile = (profile) => { return{type: SET_USER_PROFILE, profile} };

export default profilePageReducer;
