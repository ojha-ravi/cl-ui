import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../css/app.less';
import LoginLayout from './login/index';

// IndexRoute
const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={LoginLayout} />
    </div>
  </Router>
);

render(Routes, window.document.querySelector('.app'));
