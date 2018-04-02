import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './app';
import '../css/app.less';
// import LoginLayout from './login/Index';
import store from './tools/configureStore';

// import ForgotPasswordLayout from './forgotPassword/Index';

const Routes = (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
    </Router>
  </Provider>
);

render(Routes, window.document.querySelector('.app'));
