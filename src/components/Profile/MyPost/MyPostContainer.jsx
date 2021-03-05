import React from 'react';
import MyPost from './MyPost'
import {connect} from 'react-redux';
import {ADD_POST_CREATOR, UPDATE_NEW_POST_TEXT_CREATOR} from './../../../redux/profilePage-reducer';

const mapStateToProps = (state) => {
  return { textNewPost: state.profilePage.textNewPost,
           posts: state.profilePage.posts,}
};

const mapDispatchToProps = (dispatch) => {
  const addNewPost = (e) => {
    let text = e.target.value;
    dispatch(ADD_POST_CREATOR());
  };

  const changeNewPost = (e) => {
    let newText = e.target.value;
    dispatch(UPDATE_NEW_POST_TEXT_CREATOR(newText));
  };

  return {addNewPost: addNewPost, changeNewPost: changeNewPost,}
};


const SuperMyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default SuperMyPostContainer;
