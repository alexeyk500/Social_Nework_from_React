import React from 'react';
import Post    from './../Post/Post';
import classes from './MyPost.module.css';
import { Field, reduxForm } from 'redux-form';
import {Textarea} from './../../Common/FormsControls/FormsControls';
import {required, maxLengthCreator} from './../../../redux/validators';

const maxLength15 = maxLengthCreator(15);

const NewMyPostForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea}
             name={'newPostText'}
             placeholder={'Enter your message'}
             validate = {[required, maxLength15]}
             className={classes.textArea}/>
      <div className={classes.wrapperButtonAdd}>
        <button className={classes.buttonAdd} >Опубликовать</button>
      </div>
    </form>
  )
};

const MyPost = React.memo((props) => {
  const postsElements = props.posts.map(post=>(<Post text ={post.postText} key={post.id}/>));
  const submitNewMyPost = (value) => {
    props.addNewPost(value.newPostText)
  }
  return (
    <div className={classes.containerMyPost}>
      <div className={classes.header + ' ' + classes.dialogsContainer}>
        New Post
      </div>
      <div action="#" className="formAddNewPost">
        <div className={classes.wrapperInputBlock}>
          <NewMyPostReduxForm onSubmit={submitNewMyPost} />
        </div>
        {postsElements}
      </div>
    </div>
  )
});

const NewMyPostReduxForm = reduxForm({
  form: 'newMyPostForm'
})(NewMyPostForm);

export default MyPost;
