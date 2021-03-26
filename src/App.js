import React   from 'react';
import { compose } from 'redux';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';
import Nav      from './components/Nav/Nav';
import News     from './components/News/News';
import Music    from './components/Music/Music';
import Login    from './components/Login/Login';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer   from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Preloader from './components/Common/Preloader/Preloader';

import {initializeApp} from './redux/app-reducer';

// acces key: 973ba552-4a5a-4aa4-a0e4-1d88a4f3b86e

class App extends React.Component {
  componentDidMount(){
    this.props.initializeApp();
  };

  render(){
    if (!this.props.initialized) {
      return <Preloader />
    } else {
      return (
        <div className='app-wrapper'>
          <HeaderContainer />
          <Nav />
          <div className='app-wrapper-content'>

            <Route path='/profile/:userId?'  render={() => <ProfileContainer />} />
            <Route path='/dialogs'  render={() => <DialogsContainer store={this.props.store} />} />
            <Route path='/users'    render={() => <UsersContainer />} />
            <Route path='/news'     render={() => <News />} />
            <Route path='/music'    render={() => <Music />} />
            <Route path='/login'    render={() => <Login />} />
            <Route path='/settings' render={() => <Settings />} />
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {initialized: state.app.initialized}
};

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);
