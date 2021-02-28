import React from 'react';
import Dialogs from './Dialogs';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import {SEND_MESSAGE_CREATOR, UPDATE_NEW_MESSAGE_TEXT_CREATOR} from './../../redux/dialogsPage-reducer';

const NavLinkNav = (props) => {
  return <NavLink className={classes.dialogLink} to={'/dialogs/'+props.userId}>{props.userName}</NavLink>
};

const Message = (props) => {
  return <p className={classes.messageText}>{props.messageText}</p>
};

const DialogsContainer = (props) => {
  // получение текущего state
  const state = props.store.getState()
  // преобразование в массив компонент далогов с пользоателями
  const dialogsElements=state.dialogsPage.dialogs.map( dialog => (<li className="dialogsListItem">
                                                      <NavLinkNav userName={dialog.userName} userId={dialog.userId} />
                                                    </li>)
  );
  // преобразование в массив компонент сообщений в диалоге
  let messagesElements=state.dialogsPage.messages.map(message => (<li className="messageItem">
                                                      <Message messageText={message.messagetext} />
                                                      </li>)
  )

  // Получаем из текст вводимого сообщения для texearea
  let newMessageText = state.dialogsPage.newMessageText;
  // Обработчик нажатия на кнопку Send
  const SendMesageButtonClick = () => {
    props.store.dispatch(SEND_MESSAGE_CREATOR())
  };
  // Обработчик ввода в textarea
  const ChangeNewMessageText = (e) => {
    const NewMessageText = e.target.value;
    props.store.dispatch(UPDATE_NEW_MESSAGE_TEXT_CREATOR(NewMessageText))
  }
  // основная сборка компоненты Dialogs
  return ( <Dialogs onSendMesageButtonClick = {SendMesageButtonClick}
                    onChangeNewMessageText = {ChangeNewMessageText}
                    newMessageText = {newMessageText}
                    dialogsElements ={dialogsElements}
                    messagesElements = {messagesElements}/>
  )
}

export default DialogsContainer;
