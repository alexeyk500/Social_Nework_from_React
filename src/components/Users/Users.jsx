import React from 'react';
import classes from './Users.module.css';
import {serverApi} from './../../api/api';
import * as axios from 'axios';
import logoAvatar from './../../assets/img/user.png';
import { NavLink } from 'react-router-dom';

let Users = (props) => {

  let pagesCount = Math.floor(props.totalUsersCount / props.pageSize);
  let maxPageCount = 20;
  pagesCount = pagesCount>maxPageCount ?maxPageCount :pagesCount;
  let pages = [];
  for(let i=1; i<=pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <span className={classes.userTitle}>Page Users - </span>

        {pages.map(page => (<span onClick={ ()=>{props.onChangeCurentPage(page)} }
                                  className={props.currentPage === page
                                              ? classes.selectedPage
                                              : classes.numPage}>
                              {page}
                            </span>))
        }

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
                  <button disabled={props.isFollowingInProgress.some(id=>id===user.id)} onClick = { ()=>{
                      props.setFollowingInProgress(true, user.id);
                      serverApi.unfollowUser(user.id)
                      .then(data =>{
                        if (data.resultCode === 0) {
                          props.unfollow(user.id)
                        }
                        props.setFollowingInProgress(false, user.id);
                      })
                      }
                    } className={classes.buttonFollow}>Follow</button>
                  : <button disabled={props.isFollowingInProgress.some(id=>id===user.id)}  onClick = { ()=>{
                    props.setFollowingInProgress(true, user.id);
                    serverApi.followUser(user.id)
                      .then(data =>{
                        if (data.resultCode === 0) {
                          props.follow(user.id)
                        }
                        props.setFollowingInProgress(false, user.id);
                      })
                    }
                    } className={classes.buttonFollow}>UnFollow</button>
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
