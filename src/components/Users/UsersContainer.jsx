import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';
import {follow_AC, unfollow_AC, setUsers_AC,
        setCurrentPage_AC, setTotalUsersCount_AC,
        toggleIsFetching_AC, } from './../../redux/userPage-reducer';
import Users from './Users';
import Preloader from './../Common/Preloader/Preloader'


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
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
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetching_AC(isFetching))
    },
  }
};

class UsersAPI extends React.Component {

  componentDidMount(){
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response =>{this.props.toggleIsFetching(false);
                        this.props.setUsers(response.data.items);
                        this.props.setTotalUsersCount(response.data.totalCount);
                        }
    );
  }

  onChangeCurentPage = (page) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then(response =>{this.props.toggleIsFetching(false);
                        this.props.setUsers(response.data.items)}
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

      />
    </>
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI)
