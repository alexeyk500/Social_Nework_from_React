import React from 'react';
import classes from './MyPost.module.css';

const MyPost = (props) => {

let newPostElement = React.createRef();

let addNewPost = () => {
  let text = newPostElement.current.value;
  props.addPost(text);
}


  return (
    <div className={classes.containerMyPost}>
      <div className={classes.header + ' ' + classes.dialogsContainer}>
        New Post
      </div>
      <div action="#" className="formAddNewPost">
        <div className={classes.wrapperInputBlock}>
          <textarea className={classes.textArea} ref={newPostElement} rows="5"></textarea>
          <div className={classes.wrapperButtonAdd}>
            <button className={classes.buttonAdd} onClick={addNewPost}>Опубликовать</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default MyPost;
