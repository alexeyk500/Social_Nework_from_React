import React from 'react';
import {connect} from 'react-redux';
import {followStatus, unfollowStatus, setUsers,
        setCurrentPage, setTotalUsersCount,
        setIsFetching, setFollowingInProgress,
        getUsers, follow, unfollow} from './../../redux/userPage-reducer';
import Users from './Users';
import Preloader from './../Common/Preloader/Preloader';
import {getPageUsers, getPageSize, getTotalUsersCount,
        getCurrentPage, getIsFetching, getIsFollowingInProgress} from './../../redux/userPage-selectors';

class UsersAPI extends React.Component {
  componentDidMount(){
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  };

  onChangeCurentPage = (page) => {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
    this.props.setCurrentPage(page);
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount = {this.props.totalUsersCount}
        pageSize = {this.props.pageSize}
        currentPage = {this.props.currentPage}
        onChangeCurentPage = {this.onChangeCurentPage}
        followStatus = {this.props.followStatus}
        unfollowStatus = {this.props.unfollowStatus}
        users = {this.props.users}
        setFollowingInProgress = {this.props.setFollowingInProgress}
        isFollowingInProgress = {this.props.isFollowingInProgress}
        follow = {this.props.follow}
        unfollow = {this.props.unfollow}
      />
    </>
  }
};

const mapStateToProps = (state) => {
  return {
    users: getPageUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isFollowingInProgress: getIsFollowingInProgress(state),
  }
};

export default connect(mapStateToProps,
                       {followStatus, unfollowStatus, setUsers, setCurrentPage,
                        setTotalUsersCount, setIsFetching, setFollowingInProgress,
                        getUsers, follow, unfollow},
                      )(UsersAPI);
