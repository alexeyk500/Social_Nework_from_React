import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

let dialogsData = [{userId:1, userName:'Olga'},
                   {userId:2, userName:'Ivan'},
                   {userId:3, userName:'Kati'},
                   {userId:4, userName:'Ange'},
                   {userId:5, userName:'Iveya'},
];

let messagesData = [{messageId:1, messagetext:'Hi'},
                    {messageId:2, messagetext:'How is your day?'},
                    {messageId:3, messagetext:'Will you come today?'},
];

const NavLinkNav = (props) => {
  return <NavLink className={classes.dialogLink} to={'/dialogs/'+props.userId}>{props.userName}</NavLink>
};

const Message = (props) => {
  return <p className={classes.messageText}>{props.messageText}</p>
};

let dialogsElements = dialogsData.map( dialog => (<li className="dialogsListItem">
                                                    <NavLinkNav userName={dialog.userName} userId={dialog.userId} />
                                                  </li>)
);

let messagesElements = messagesData.map(message => (<li className="messageItem">
                                                    <Message messageText={message.messagetext} />
                                                    </li>)
)

const Dialogs = (props) => {
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
