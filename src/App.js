import React   from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import Nav      from './components/Nav/Nav';
import News     from './components/News/News';
import Music    from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer   from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer'

// acces key: 973ba552-4a5a-4aa4-a0e4-1d88a4f3b86e

const App = (props) =>{
  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Nav />
        <div className='app-wrapper-content'>

          <Route path='/profile/:userId?'  render={() => <ProfileContainer />} />
          <Route path='/dialogs'  render={() => <DialogsContainer store={props.store} />} />
          <Route path='/users'    render={() => <UsersContainer />} />
          <Route path='/news'     render={() => <News />} />
          <Route path='/music'    render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
  )
  debugger;
}

export default App;
