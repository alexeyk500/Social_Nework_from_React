import React from 'react';
import classes from './Login.module.css';
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.form_container}>
      <div>
        <Field component={'input'} name={'login'} placeholder={'Login'} />
      </div>
      <div>
        <Field component={'input'} name={'password'} placeholder={'Password'} />
      </div>
      <div>
        <Field component={'input'} name={'rememberMe'} type={'checkbox'} /> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm);

const Login = (props) => {

  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div className={classes.container}>
        <h2 className={classes.header}>Login</h2>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login;
