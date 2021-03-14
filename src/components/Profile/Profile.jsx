import React   from 'react';
import { Redirect } from 'react-router-dom';
import beach   from './../../assets/img/lloret.jpg'
import classes from './Profile.module.css';
import UserDescription from './UserDescription/UserDescription';
import MyPostContainer from './MyPost/MyPostContainer';

const Profile = (props) => {
  // проверка на авторизованность
  if (!props.isAuthoraised) return <Redirect to='/login' />
  return (
    <div className={classes.content}>
      <div>
        <img src={beach} alt="this is Lloret beach" />
      </div>
      <UserDescription profile={props.profile} />
      <MyPostContainer />
    </div>
  )
}

export default Profile;
