import * as React from 'react';
import { render } from 'react-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './app';

import '../css/app.less';
import store from './tools/configureStore';

const Routes = (
  <Provider store={store}>
    <BrowserRouter basename="/" forceRefresh>
      <App />
    </BrowserRouter>
  </Provider>
);

render(Routes, window.document.querySelector('.app'));
