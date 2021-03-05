import React from 'react';
import classes from './Users.module.css';
import logoAvatar from './../../img/user.png'
import * as axios from 'axios';

class Users extends React.Component {

  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response =>{this.props.setUsers(response.data.items);
                        this.props.setTotalUsersCount(response.data.totalCount);
                        }
    );
  }

  onChangeCurentPage = (page) => {
    this.props.setCurrentPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then(response =>{this.props.setUsers(response.data.items)}
    );
  }

  render() {
    let pagesCount = Math.floor(this.props.totalUsersCount / this.props.pageSize);
    let maxPageCount = 20;
    pagesCount = pagesCount>maxPageCount ?maxPageCount :pagesCount;
    let pages = [];
    for(let i=1; i<=pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>

        <span className={classes.userTitle}>Page Users - </span>

          {pages.map(page => (<span onClick={ ()=>{this.onChangeCurentPage(page)} }
                                    className={this.props.currentPage === page
                                                ? classes.selectedPage
                                                : classes.numPage}>
                                {page}
                              </span>))
          }

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
