import React from 'react';
import classes from './Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../Common/FormsControls/FormsControls';
import {required, maxLengthCreator} from './../../redux/validators'


const maxLength30 = maxLengthCreator(30);

const Dialogs = (props) => {
  const submitAddNewMessageForm = (value) => {
    props.onSendMesageButtonClick(value.newMessageText)
  }
  return (
    < div className={classes.dialogsContainer}>
      <div className={classes.dialogsHeader}>
        Dialogs
      </div>
      <div className={classes.dialogsContent}>
        <ul className={classes.dialogsList}>
          {props.dialogsElements}
        </ul>
        <ul className={classes.messageList}>
          <div>{props.messagesElements}</div>
          <AddMessageReduxForm onSubmit={submitAddNewMessageForm}/>
        </ul>
      </div>
    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.wrapperInputBlock}>
        <div className={classes.textArea}>
          <Field component={Textarea}
                 name={'newMessageText'}
                 placeholder={'Enter your message'}
                 validate = {[required, maxLength30]}
                 className={classes.textArea}/>
        </div>
        <div className={classes.wrapperButtonSend}>
          <button className={classes.buttonSend}>Send</button>
        </div>
      </div>
    </form>
  )
};

const AddMessageReduxForm = reduxForm({
  // a unique name for the form
  form: 'addMessageForm'
})(AddMessageForm);

export default Dialogs;
