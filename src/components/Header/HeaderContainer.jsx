import React from 'react';
import {connect} from 'react-redux';
import {logout} from './../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {

  render() {
    return <Header {...this.props}/>
  }
};

const mapStateToProps = (state) => ({
  isAuthorised: state.auth.isAuthoraised,
  login: state.auth.login,
});

export default connect(mapStateToProps, {logout})(HeaderContainer);
