import React from 'react';
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    < div className={classes.dialogsContainer}>
      <div className={classes.dialogsHeader}>
        Dialogs
      </div>
      <div className={classes.dialogsContent}>
        <ul className={classes.dialogsList}>
          <li className="dialogsListItem">
            <a href="#" className={classes.dialogLink}>Olga</a>
          </li>
          <li className="dialogsListItem">
            <a href="#" className={classes.dialogLink}>Ivan</a>
          </li>
          <li className="dialogsListItem">
            <a href="#" className={classes.dialogLink}>Kati</a>
          </li>
          <li className="dialogsListItem">
            <a href="#" className={classes.dialogLink}>Ange</a>
          </li>
          <li className="dialogsListItem">
            <a href="#" className={classes.dialogLink}>Iveya</a>
          </li>
        </ul>
        <ul className={classes.messageList}>
          <li className="messageItem">
            <p className={classes.messageText}>
              Hi
            </p>
            <p className={classes.messageText}>
              How is your day?
            </p>
            <p className={classes.messageText}>
              Will you come today?
            </p>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Dialogs;
