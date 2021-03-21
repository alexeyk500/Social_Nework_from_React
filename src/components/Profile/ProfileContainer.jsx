import React   from 'react';
import { compose } from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Profile from './Profile';
import {getUserProfile} from './../../redux/profilePage-reducer';
import {withAuthRedirect} from './../../hoc/withAuthRedirect'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 15662;
    }
    this.props.getUserProfile(userId);
  };

  render() {
    return (
      <Profile {...this.props} />
    )
  }
};

const mapStateToProps = (state) =>{
  return {profile: state.profilePage.profile}
};

export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, {getUserProfile})
  )(ProfileContainer)
