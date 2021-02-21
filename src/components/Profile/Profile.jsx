import React   from 'react';
import beach   from './../../img/lloret.jpg';
import classes from './Profile.module.css';
import MyPost  from './MyPost/MyPost';
import Post    from './Post/Post';
import UserDescription from './UserDescription/UserDescription';

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src={beach} alt="this is beach" />
      </div>
      <UserDescription />
      <MyPost />
      <Post message ='Hi, how are you?' />
      <Post message ='Do you listen to me?'/>
      <Post message ='Why do you not answer?'/>
    </div>
  )
}


export default Profile;
