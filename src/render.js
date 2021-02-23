import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

import {addPost} from './redux/state'
import {preSavePost} from './redux/state'

export let renderDOM = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} preSavePost={preSavePost}/>
      </BrowserRouter>
    </React.StrictMode>, document.getElementById('root')
  );
};




