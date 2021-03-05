import React from 'react';
import Users from './Users';
import {follow_AC, unfollow_AC, setUsers_AC} from './../../redux/userPage-reducer';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
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
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users)
