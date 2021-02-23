import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './App';

import store from './redux/state';


let reRenderDOM = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={store.getState()}
             addPost={store.addPost.bind(store)}
             preSavePost={store.preSavePost.bind(store)}/>
      </BrowserRouter>
    </React.StrictMode>, document.getElementById('root')
  );
};

// let reRenderDOM = (store) => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <BrowserRouter>
//         <App store={store}/>
//       </BrowserRouter>
//     </React.StrictMode>, document.getElementById('root')
//   );
// };

store.subscribe(reRenderDOM);

reRenderDOM(store);


