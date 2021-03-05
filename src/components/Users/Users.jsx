import React from 'react';
import classes from './Users.module.css';
import logoAvatar from './../../img/user.png'
import * as axios from 'axios';

class Users extends React.Component {

  constructor(props) {
    super(props);
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response =>{this.props.setUsers(response.data.items)}
    );
  }

  render() {
    return (
      <div>
        <div className={classes.userTitle}>Users</div>
          {this.props.users.map(user=>
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
                    ? <button onClick = { ()=>{this.props.unfollow(user.id)} } className={classes.buttonFollow}>Follow</button>
                    : <button onClick = { ()=>{this.props.follow(user.id)} }   className={classes.buttonFollow}>UnFollow</button>
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
};

export default Users
