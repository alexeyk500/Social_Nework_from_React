import React   from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Profile from './Profile';
import {getUserProfile} from './../../redux/profilePage-reducer';
import {withAuthRdirect} from './../../hoc/withAuthRedirect'

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

// HOC на авторизованность пользователя
const AuthRedirectComponent = withAuthRdirect(ProfileContainer)

const mapStateToProps = (state) => {
  let prof = state.profilePage.profile;
  return {
    profile: prof,
  }

};

const withURLProfileContainer = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(withURLProfileContainer);
