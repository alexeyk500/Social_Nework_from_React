import React from 'react';
import classes from './MyPost.module.css';

const MyPost = (props) => {

  return (
    <div className={classes.containerMyPost}>
      <div className={classes.header + ' ' + classes.dialogsContainer}>
        New Post
      </div>
      <div action="#" className="formAddNewPost">
        <div className={classes.wrapperInputBlock}>
          <textarea className={classes.textArea}
                    onChange={props.changeNewPost}
                    rows="5" value={props.textNewPost}></textarea>
          <div className={classes.wrapperButtonAdd}>
            <button className={classes.buttonAdd} onClick={props.addNewPost}>Опубликовать</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPost;
