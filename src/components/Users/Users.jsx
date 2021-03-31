import React from 'react';
import classes from './Users.module.css';
import logoAvatar from './../../assets/img/user.png';
import { NavLink } from 'react-router-dom';
//import Paginator from '../Common/Paginator/Paginator'
import PaginatorWithHooks from '../Common/Paginator/PaginatorWithHooks'

let Users = (props) => {

  return (
    <div>
      < PaginatorWithHooks
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        onChangeCurentPage={props.onChangeCurentPage}
        currentPage={props.currentPage}
      />
      {props.users.map(user=>
        <div>
          <div className={classes.userContainer} key={user.id}>
          <div className={classes.leftColumn}>
            <div className={classes.avatarWrapper}>
              <NavLink to ={'profile/'+user.id}>
                <img
                  className={classes.avatar}
                  src={ user.photos.small != null ? user.photos.small: logoAvatar}
                  alt=""
                />
              </NavLink>

            </div>
            <div className={classes.buttonWrapper}>
              {user.followed ?
                <button disabled={props.isFollowingInProgress.some(id=>id===user.id)}
                        onClick = { ()=>{props.follow(user.id)} }
                        className={classes.buttonFollow}>Follow
                </button>
                : <button disabled={props.isFollowingInProgress.some(id=>id===user.id)}
                          onClick = { ()=>{ props.unfollow(user.id) }}
                          className={classes.buttonFollow}>UnFollow
                  </button>
              }
            </div>
          </div>
          <div className={classes.righColumn}>
            <div className={classes.leftBlock}>
              <div className={classes.userName}>
                {user.name}
              </div>
              <div className={classes.userSatus}>
                {user.status}
              </div>
            </div>
            <div className={classes.rightBlock}>
              <div className={classes.userCountry}>
                {'user.userLocation.country'}
              </div>
              <div className={classes.userCity}>
                {'user.userLocation.city'}
              </div>
            </div>
          </div>

        </div>
          <div className={classes.redLine}></div>
        </div>
      )}
    </div>
  )
}

export default Users;
