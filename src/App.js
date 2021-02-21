import React   from 'react';
import Header  from './components/Header/Header';
import Nav     from './components/Nav/Nav';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs'
import './App.css';

const App = () =>{
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        <Content />
        {/* <Dialogs /> */}
      </div>
    </div>
  )
}

export default App;
