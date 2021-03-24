import MyPost from './MyPost'
import {connect} from 'react-redux';
import {ADD_POST_CREATOR} from './../../../redux/profilePage-reducer';

const mapStateToProps = (state) => {
  return {posts: state.profilePage.posts}
};

const mapDispatchToProps = (dispatch) => {
  const addNewPost = (newPostText) => {
    dispatch(ADD_POST_CREATOR(newPostText));
  };
  return {addNewPost: addNewPost}
};

const SuperMyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default SuperMyPostContainer;
