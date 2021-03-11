import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';
import {follow, unfollow, setUsers,
        setCurrentPage, setTotalUsersCount, setIsFetching, } from './../../redux/userPage-reducer';
import Users from './Users';
import Preloader from './../Common/Preloader/Preloader';


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
};

class UsersAPI extends React.Component {

  componentDidMount(){
    this.props.setIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response =>{this.props.setIsFetching(false);
                        this.props.setUsers(response.data.items);
                        this.props.setTotalUsersCount(response.data.totalCount);
                        }
    );
  }

  onChangeCurentPage = (page) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then(response =>{this.props.setIsFetching(false);
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

export default connect(mapStateToProps,
                       {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching},
                      )(UsersAPI);
