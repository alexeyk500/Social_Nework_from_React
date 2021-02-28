import React   from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import Header   from './components/Header/Header';
import Nav      from './components/Nav/Nav';
import Profile  from './components/Profile/Profile';
import News     from './components/News/News';
import Music    from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer'

const App = (props) =>{
  return (
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>

          <Route path='/profile'  render={() => <Profile          store={props.store} />} />
          <Route path='/dialogs'  render={() => <DialogsContainer store={props.store} />} />
          <Route path='/news'     render={() => <News />} />
          <Route path='/music'    render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
  )
  debugger;
}

export default App;
