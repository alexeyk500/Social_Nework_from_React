import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';
import {follow, unfollow, setUsers,
        setCurrentPage, setTotalUsersCount,
        setIsFetching, setFollowingInProgress} from './../../redux/userPage-reducer';
import {serverApi} from './../../api/api';
import Users from './Users';
import Preloader from './../Common/Preloader/Preloader';

class UsersAPI extends React.Component {
  componentDidMount(){
    this.props.setIsFetching(true);
    serverApi.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data =>{this.props.setIsFetching(false);
                        this.props.setUsers(data.items);
                        this.props.setTotalUsersCount(data.totalCount);
                        });
  };

  onChangeCurentPage = (page) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(page);
    serverApi.getUsers(page, this.props.pageSize)
      .then(data =>{this.props.setIsFetching(false);
                        this.props.setUsers(data.items)}
    );
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount = {this.props.totalUsersCount}
        pageSize = {this.props.pageSize}
        currentPage = {this.props.currentPage}
        onChangeCurentPage = {this.onChangeCurentPage}
        follow = {this.props.follow}
        unfollow = {this.props.unfollow}
        users = {this.props.users}
        setFollowingInProgress = {this.props.setFollowingInProgress}
        isFollowingInProgress = {this.props.isFollowingInProgress}
      />
    </>
  }
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowingInProgress: state.usersPage.isFollowingInProgress,
  }
};

export default connect(mapStateToProps,
                       {follow, unfollow, setUsers, setCurrentPage,
                        setTotalUsersCount, setIsFetching, setFollowingInProgress},
                      )(UsersAPI);
