import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'react-select/dist/react-select.css';
import App from './App';

import '../css/app.less';
import store from './tools/configureStore';

const Routes = (
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </Provider>
);

render(Routes, window.document.querySelector('.app'));
