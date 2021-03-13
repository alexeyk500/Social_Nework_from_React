import React from 'react';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUsersData} from './../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {
  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
    .then(response =>{
      if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        this.props.setAuthUsersData(id, email, login);
      }
    })
  };

  render() {
    return <Header {...this.props}/>
  }
};

const mapStateToProps = (state) => ({
  isAuthorised: state.auth.isAuthoraised,
  login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUsersData})(HeaderContainer);