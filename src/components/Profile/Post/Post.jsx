import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div className={classes.postContainer}>
        <h3 className={classes.postHeader}> Post </h3>
        <span className={classes.postText}> {props.text} </span>
    </div>
  )
}

export default Post;
