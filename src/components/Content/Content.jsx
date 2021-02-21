import React   from 'react';
import beach   from './../../img/lloret.jpg';
import classes from './Content.module.css';
import MyPost  from './MyPost/MyPost';
import Post    from './Post/Post';
import ProFile from './ProFile/ProFile';

const Content = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src={beach} alt="this is beach" />
      </div>
      <ProFile />
      <MyPost />
      <Post message ='Hi, how are you?' />
      <Post message ='Do you listen to me?'/>
      <Post message ='Why do you not answer?'/>
    </div>
  )
}


export default Content;
