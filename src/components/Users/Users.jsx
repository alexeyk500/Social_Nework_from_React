import React from 'react';
import classes from './Users.module.css';
import logoAvatar from './../../img/user.png'

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
                <img
                  className={classes.avatar}
                  src={ user.photos.small != null ? user.photos.small: logoAvatar}
                  alt=""
                />
              </div>
              <div className={classes.buttonWrapper}>
                {user.followed
                  ? <button onClick = { ()=>{props.unfollow(user.id)} } className={classes.buttonFollow}>Follow</button>
                  : <button onClick = { ()=>{props.follow(user.id)} }   className={classes.buttonFollow}>UnFollow</button>
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
