import React from 'react';
import { Redirect } from 'react-router-dom';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  // проверка на авторизованность
  if (!props.isAuthoraised) return <Redirect to='/login' />
  // основная сборка компоненты Dialogs
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
          <div className={classes.wrapperInputBlock}>
            <div className={classes.textArea}>
              <textarea className={classes.textArea}
                        value={props.newMessageText}
                        placeholder='Enter your message'
                        onChange={props.onChangeNewMessageText}></textarea>
            </div>
            <div className={classes.wrapperButtonSend}>
              <button className={classes.buttonSend} onClick={props.onSendMesageButtonClick}>Send</button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Dialogs;
