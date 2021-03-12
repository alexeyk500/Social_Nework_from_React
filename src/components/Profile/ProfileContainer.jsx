import React   from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import * as axios from 'axios';
import {setUserProfile} from './../../redux/profilePage-reducer';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 15662;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    .then(response =>{
      this.props.setUserProfile(response.data);
    })
  };

  render() {
    return (
      <Profile {...this.props} />
    )
  }
};

const mapStateToProps = (state) => {
  let prof = state.profilePage.profile;
  console.log(prof)
  return {
    profile: prof,
  }
};

const withURLProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withURLProfileContainer);
