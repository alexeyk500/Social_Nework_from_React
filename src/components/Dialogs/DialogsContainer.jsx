import React from 'react';
import Dialogs from './Dialogs';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {ADD_MESSAGE_CREATOR} from './../../redux/dialogsPage-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

// компонента для создания NavLink
const NavLinkNav = (props) => {
  return <NavLink className={classes.dialogLink} to={'/dialogs/'+props.userId}>{props.userName}</NavLink>
};
// компонета для отображения текста сообщения
const Message = (props) => {
  return <p className={classes.messageText}>{props.messageText}</p>
};

// Функция для формирования данных из state передаваемых в компоненту
const mapStateToProps = (state) =>{
  // преобразование в массив компонент далогов с пользоателями
  const dialogsElements=state.dialogsPage.dialogs.map( dialog => (<li className="dialogsListItem">
                                                      <NavLinkNav userName={dialog.userName} key={dialog.id} userId={dialog.userId} />
                                                    </li>)
  );
  // преобразование в массив компонент сообщений в диалоге
  const messagesElements=state.dialogsPage.messages.map(message => (<li className="messageItem">
                                                      <Message messageText={message.messagetext} key={message.id}/>
                                                      </li>)
  );
  return {dialogsElements, messagesElements}
};

// Функция для передачи колбэков в компоненту
const mapDispatchToProps = (dispatch) =>{
  // Обработчик нажатия на кнопку Send
  const onSendMesageButtonClick = (newMessageText) => {
    dispatch(ADD_MESSAGE_CREATOR(newMessageText));
  };
  return {onSendMesageButtonClick:onSendMesageButtonClick}
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)
