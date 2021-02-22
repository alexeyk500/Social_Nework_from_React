import React   from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import './App.css';
import Header   from './components/Header/Header';
import Nav      from './components/Nav/Nav';
import Profile  from './components/Profile/Profile';
import Dialogs  from './components/Dialogs/Dialogs';
import News     from './components/News/News';
import Music    from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) =>{
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>

          <Route path='/profile'
                  render={() => <Profile
                    postsData={props.state.profilePage.posts} />}
          />
          <Route path='/dialogs'
                  render={() => <Dialogs
                    dialogsData={props.state.dialogsPage.dialogs}
                    messagesData={props.state.dialogsPage.messages} />}
          />
          <Route path='/news'     render={() => <News />} />
          <Route path='/music'    render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
