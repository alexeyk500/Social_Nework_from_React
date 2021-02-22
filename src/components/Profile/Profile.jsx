import React   from 'react';
import beach   from './../../img/lloret.jpg';
import classes from './Profile.module.css';
import MyPost  from './MyPost/MyPost';
import Post    from './Post/Post';
import UserDescription from './UserDescription/UserDescription';

const Profile = (props) => {

  const postsElements = props.postsData.map(post=>(<Post text ={post.postText} />));

  return (
    <div className={classes.content}>
      <div>
        <img src={beach} alt="this is beach" />
      </div>
      <UserDescription />
      <MyPost />
      {postsElements}
    </div>
  )
}


export default Profile;
