import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const NavLinkNav = (props) => {
  return <NavLink className={classes.dialogLink} to={'/dialogs/'+props.userId}>{props.userName}</NavLink>
};

const Message = (props) => {
  return <p className={classes.messageText}>{props.messageText}</p>
};

const Dialogs = (props) => {

  let dialogsElements = props.dialogsData.map( dialog => (<li className="dialogsListItem">
                                                      <NavLinkNav userName={dialog.userName} userId={dialog.userId} />
                                                    </li>)
  );

  let messagesElements = props.messagesData.map(message => (<li className="messageItem">
                                                      <Message messageText={message.messagetext} />
                                                      </li>)
  )

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
          {messagesElements}
        </ul>
      </div>
    </div>
  )
}

export default Dialogs;
