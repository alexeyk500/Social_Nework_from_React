// actions constant
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// actions creators
export const ADD_POST_CREATOR = () => {
  return {type: ADD_POST};
};
export const UPDATE_NEW_POST_TEXT_CREATOR = (newText) => {
  return {type:UPDATE_NEW_POST_TEXT, newText:newText};
};

// Выбор возможных действий
export const profilePageReducer = (state, action) => {
  switch(action.type) {
    case ADD_POST: {
      let newPost = {postId:5, postText:state.textNewPost};
      state.posts.push(newPost);
      state.textNewPost = '';
      return state;
    }
    case UPDATE_NEW_POST_TEXT: {
      state.textNewPost = action.newText;
      return state;
    }
    default: return state;
  }
};

export default profilePageReducer;
