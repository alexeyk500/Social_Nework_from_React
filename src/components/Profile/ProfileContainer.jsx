import React   from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Profile from './Profile';
import {getUserProfile} from './../../redux/profilePage-reducer';
//import {serverApi} from './../../api/api'

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

const mapStateToProps = (state) => {
  let prof = state.profilePage.profile;
  return {
    profile: prof,
    isAuthoraised: state.auth.isAuthoraised,
  }

};

const withURLProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(withURLProfileContainer);
