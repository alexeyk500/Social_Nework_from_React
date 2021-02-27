import React   from 'react';
import beach   from './../../img/lloret.jpg';
import classes from './Profile.module.css';
import MyPost  from './MyPost/MyPost';
import Post    from './Post/Post';
import UserDescription from './UserDescription/UserDescription';

const Profile = (props) => {
  const postsElements = props.profilePageData.posts.map(post=>(<Post text ={post.postText} />));
  return (
    <div className={classes.content}>
      <div>
        <img src={beach} alt="this is Lloret beach" />
      </div>
      <UserDescription />
      <MyPost textNewPost={props.profilePageData.textNewPost} dispatch={props.dispatch}/>
      {postsElements}
    </div>
  )
}

export default Profile;