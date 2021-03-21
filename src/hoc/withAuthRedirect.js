import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToPropsForRedirect = (state) => ({
  isAuthoraised: state.auth.isAuthoraised
});

export const withAuthRdirect = (Component) =>{
  class RedirectComponent extends React.Component {
    render(){
      // проверка пользователя на авторизованность
      if (!this.props.isAuthoraised) return <Redirect to='/login' />
      return <Component {...this.props} />
    }
  }

  const ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
  return ConnectedRedirectComponent
};

