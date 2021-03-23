import React from 'react';
import classes from './Login.module.css';

const LoginForm = (props) => {
  return (
    <form className={classes.form_container}>
      <div>
        <input type={'text'} placeholder={'Login'}/>
      </div>
      <div>
        <input type='text' placeholder={'Password'}/>
      </div>
      <div>
        <input type='checkbox'/> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const Login = (props) => {
  return (
    <div className={classes.container}>
        <h2 className={classes.header}>Login</h2>
        <LoginForm />
    </div>
  )
}

export default Login;
