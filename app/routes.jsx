import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import '../css/app.less';
import LoginLayout from './login/Index';
import ForgotPasswordLayout from './forgotPassword/Index';
import store from './tools/configureStore';

// IndexRoute
const Routes = (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={LoginLayout} />
        <Route exact path="/forgotpassword" component={ForgotPasswordLayout} />
      </div>
    </Router>
  </Provider>
);

render(Routes, window.document.querySelector('.app'));
