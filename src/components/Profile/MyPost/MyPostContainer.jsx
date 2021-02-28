import React from 'react';
import MyPost from './MyPost'
import {ADD_POST_CREATOR, UPDATE_NEW_POST_TEXT_CREATOR} from './../../../redux/profilePage-reducer';

const MyPostContainer = (props) => {

  const state = props.store.getState();
  const addNewPost = (e) => {
    let text = e.target.value;
    props.store.dispatch(ADD_POST_CREATOR());
  };

  const changeNewPost = (e) => {
    let newText = e.target.value;
    props.store.dispatch(UPDATE_NEW_POST_TEXT_CREATOR(newText));
  };
  console.log(state)
  return (<MyPost addNewPost={addNewPost} changeNewPost={changeNewPost} textNewPost={state.profilePage.textNewPost}/>)
}

export default MyPostContainer;
