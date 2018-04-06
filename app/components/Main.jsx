import React from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ProfileLayout from './profile/Index';
import NavBar from './common/navBar';

const Main = () => (
  <div>
    <NavBar key="navBar" />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={ProfileLayout} />
      </Switch>
    </main>
  </div>
);

Main.propTypes = {};

export default Main;
