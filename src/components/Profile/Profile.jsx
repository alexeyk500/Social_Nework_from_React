import React   from 'react';
import beach   from './../../img/lloret.jpg';
import classes from './Profile.module.css';
import Post    from './Post/Post';
import UserDescription from './UserDescription/UserDescription';
import MyPostContainer from './MyPost/MyPostContainer';

const Profile = (props) => {

  // Получаем состояние и фомаруем из него массив компонент с постами
  const state = props.store.getState();
  const postsElements = state.profilePage.posts.map(post=>(<Post text ={post.postText} />));

  return (
    <div className={classes.content}>
      <div>
        <img src={beach} alt="this is Lloret beach" />
      </div>
      <UserDescription />
      <MyPostContainer store={props.store}/>
      {postsElements}
    </div>
  )
}

export default Profile;
