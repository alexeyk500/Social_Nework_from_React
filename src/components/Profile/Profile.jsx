import React   from 'react';
import beach   from './../../assets/img/lloret.jpg'
import classes from './Profile.module.css';
import UserDescription from './UserDescription/UserDescription';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import MyPostContainer from './MyPost/MyPostContainer';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

const Profile = (props) => {
  return (
    <div className={classes.content}>
      <div>
        <img src={beach} alt="this is Lloret beach" />
      </div>
      <UserDescription profile={props.profile} />
      {/* <ProfileStatus status={props.status} updateStatus={props.updateStatus}/> */}
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
      <MyPostContainer />
    </div>
  )
}

export default Profile;
