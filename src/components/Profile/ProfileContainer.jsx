import React   from 'react';
import { compose } from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Profile from './Profile';
import {getUserProfile, getStatus, updateStatus} from './../../redux/profilePage-reducer';
import {withAuthRedirect} from './../../hoc/withAuthRedirect'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 15662;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  };

  render() {
    return (
      <Profile {...this.props} />
    )
  }
};

const mapStateToProps = (state) =>({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})
  )(ProfileContainer)
