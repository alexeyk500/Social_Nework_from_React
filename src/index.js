import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import App from './App';

import store from './redux/redux-store';

// функция рендеринга страницы
ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App store={store}/>
      </Provider>
    </BrowserRouter>, document.getElementById('root')
);

window.store = store;
