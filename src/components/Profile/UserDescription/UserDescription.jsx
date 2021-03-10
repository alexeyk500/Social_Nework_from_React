import React from 'react';
import classes from './UserDescription.module.css';
import Preloader from './../../Common/Preloader/Preloader';

const UserDescription = (props) => {
  if(!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={classes.descriptionWrapper}>
        <div>
          <img className={classes.avatar} src={props.profile.photos.large} />
        </div>

        <div className={classes.descriptionText}>
          <div className={classes.name}>{props.profile.fullName}</div>
          <div>"{props.profile.aboutMe}"</div>
        </div>
      </div>
    </div>

  )
}

export default UserDescription;
