import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import LoginLayout from './login/Index';
import NavBar from './components/common/navBar';
import ProfileLayout from './components/profile/Index';
import Home from './components/Home';

const App = props => (
  <div>
    {props.loggedInUser.id ? (
      <div>
        <NavBar key="navBar" />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={ProfileLayout} />
          </Switch>
        </main>
      </div>
    ) : (
      <LoginLayout />
    )}
  </div>
);

App.propTypes = {
  loggedInUser: PropTypes.shape({
    userId: PropTypes.string,
    id: PropTypes.string
  })
};

App.defaultProps = {
  loggedInUser: {}
};

const mapStateToProps = ({ loginReducer }) => ({
  loggedInUser: loginReducer.loggedInUser
});

export default withRouter(connect(mapStateToProps)(App));
