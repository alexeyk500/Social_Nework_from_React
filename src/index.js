import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './App';

import store from './redux/state';

// функция рендеринга страницы
const reRenderDOM = (state) => {
  ReactDOM.render(
      <BrowserRouter>
        <App state={state}
             dispatch={store.dispatch.bind(store)}
             store={store}/>
      </BrowserRouter>, document.getElementById('root')
  );
};

// передаем в stor функцию отвественную за рендеринг страницы
store.subscribe(reRenderDOM);

// первый рендеринг старницы при запуске приложения
reRenderDOM(store.getState());


