import React   from 'react';
import beach   from './../../img/lloret.jpg';
import classes from './Profile.module.css';
import UserDescription from './UserDescription/UserDescription';
import MyPostContainer from './MyPost/MyPostContainer';

const Profile = (props) => {

  return (
    <div className={classes.content}>
      <div>
        <img src={beach} alt="this is Lloret beach" />
      </div>
      <UserDescription />
      <MyPostContainer />
    </div>
  )
}

export default Profile;
