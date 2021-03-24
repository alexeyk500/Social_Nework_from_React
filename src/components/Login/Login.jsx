import React from "react";
import classes from "./Login.module.css";
import {connect} from 'react-redux';
import { Field, reduxForm } from "redux-form";
import { Input } from "../Common/FormsControls/FormsControls";
import { required, maxLengthCreator } from "../../redux/validators";
import {login, logout} from './../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';

const maxLength35 = maxLengthCreator(35);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.form_container}>
      <div>
        <Field
          component={Input}
          name={"email"}
          placeholder={"Email"}
          validate={[required, maxLength35]}
        />
      </div>
      <div>
        <Field
          component={Input}
          name={"password"}
          placeholder={"Password"}
          validate={[required, maxLength35]}
        />
      </div>
      <div>
        <Field component={'input'} name={"rememberMe"} type={"checkbox"} />{" "}
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
    props.login(formData.email, formData.password, formData.rememberMe)
  };

  if (props.isAuthoraised) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div className={classes.container}>
      <h2 className={classes.header}>Login</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthoraised: state.auth.isAuthoraised
});

export default connect(mapStateToProps, {login, logout})(Login);
