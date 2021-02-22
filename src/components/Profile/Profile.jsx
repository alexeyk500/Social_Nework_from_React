import React   from 'react';
import beach   from './../../img/lloret.jpg';
import classes from './Profile.module.css';
import MyPost  from './MyPost/MyPost';
import Post    from './Post/Post';
import UserDescription from './UserDescription/UserDescription';

let postsData = [{postId:1, postText:'Hi, how are you?'},
                 {postId:2, postText:'Do you listen to me?'},
                 {postId:3, postText:'Why do you not answer?'},
                 {postId:4, postText:'blablabla - bla'},
];

const postsElements = postsData.map(post=>(<Post text ={post.postText} />));

const Profile = () => {
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
