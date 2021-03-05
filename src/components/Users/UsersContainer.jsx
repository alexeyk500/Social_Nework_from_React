import React from 'react';
import Users from './Users';
import {follow_AC, unfollow_AC, setUsers_AC,
        setCurrentPage_AC, setTotalUsersCount_AC} from './../../redux/userPage-reducer';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(follow_AC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollow_AC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsers_AC(users))
    },
    setCurrentPage: (newCurrentPage) => {
      dispatch(setCurrentPage_AC(newCurrentPage))
    },
    setTotalUsersCount: (totalUserCount) => {
      dispatch(setTotalUsersCount_AC(totalUserCount))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users)
