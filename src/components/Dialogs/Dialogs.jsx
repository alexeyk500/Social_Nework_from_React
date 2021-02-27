import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import {SEND_MESSAGE_CREATOR, UPDATE_NEW_MESSAGE_TEXT_CREATOR} from './../../redux/state';

const NavLinkNav = (props) => {
  return <NavLink className={classes.dialogLink} to={'/dialogs/'+props.userId}>{props.userName}</NavLink>
};

const Message = (props) => {
  return <p className={classes.messageText}>{props.messageText}</p>
};

const Dialogs = (props) => {
  // преобразование в массив компонент далогов с пользоателями
  let dialogsElements=props.state.dialogsPage.dialogs.map( dialog => (<li className="dialogsListItem">
                                                      <NavLinkNav userName={dialog.userName} userId={dialog.userId} />
                                                    </li>)
  );
  // преобразование в массив компонент сообщений в диалоге
  let messagesElements=props.state.dialogsPage.messages.map(message => (<li className="messageItem">
                                                      <Message messageText={message.messagetext} />
                                                      </li>)
  )

  // Получаем из props текст вводимого сообщения для texearea
  let newMessageText = props.state.dialogsPage.newMessageText;
  // Обработчик нажатия на кнопку Send
  const onSendMesageButtonClick = () => {
    props.store.dispatch(SEND_MESSAGE_CREATOR())
  };
  // Обработчик ввода в textarea
  const onChangeNewMessageText = (e) => {
    const NewMessageText = e.target.value;
    props.dispatch(UPDATE_NEW_MESSAGE_TEXT_CREATOR(NewMessageText))
  }
  // основная сборка компоненты Dialogs
  return (
    < div className={classes.dialogsContainer}>
      <div className={classes.dialogsHeader}>
        Dialogs
      </div>
      <div className={classes.dialogsContent}>
        <ul className={classes.dialogsList}>
          {dialogsElements}
        </ul>
        <ul className={classes.messageList}>
          <div>{messagesElements}</div>
          <div className={classes.wrapperInputBlock}>
            <div className={classes.textArea}>
              <textarea className={classes.textArea}
                        value={newMessageText}
                        placeholder='Enter your message'
                        onChange={onChangeNewMessageText}></textarea>
            </div>
            <div className={classes.wrapperButtonSend}>
              <button className={classes.buttonSend} onClick={onSendMesageButtonClick}>Send</button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Dialogs;
