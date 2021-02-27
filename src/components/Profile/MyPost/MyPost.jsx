import React from 'react';
import classes from './MyPost.module.css';
import {ADD_POST_CREATOR, UPDATE_NEW_POST_TEXT_CREATOR} from './../../../redux/profilePage-reducer';

const MyPost = (props) => {

let newPostElement = React.createRef();

let addNewPost = () => {
  let text = newPostElement.current.value;
  props.dispatch(ADD_POST_CREATOR());
}

let preSaveNewPost = () => {
  let newText = newPostElement.current.value;
  props.dispatch(UPDATE_NEW_POST_TEXT_CREATOR(newText));
}
  return (
    <div className={classes.containerMyPost}>
      <div className={classes.header + ' ' + classes.dialogsContainer}>
        New Post
      </div>
      <div action="#" className="formAddNewPost">
        <div className={classes.wrapperInputBlock}>
          <textarea className={classes.textArea}
                    ref={newPostElement}
                    onChange={preSaveNewPost}
                    rows="5" value={props.textNewPost}></textarea>
          <div className={classes.wrapperButtonAdd}>
            <button className={classes.buttonAdd} onClick={addNewPost}>Опубликовать</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default MyPost;
