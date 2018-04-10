import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import LoginLayout from './login/Index';
import NavBar from './components/common/navBar';
import ProfileLayout from './components/profile/Index';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.uiBlocking = this.uiBlocking.bind(this);
    this.uiUnBlocking = this.uiUnBlocking.bind(this);
  }

  uiBlocking() {
    console.log('Blocking');
  }
  uiUnBlocking() {
    console.log('not Blocking');
  }

  render() {
    const { props } = this;
    return (
      <div>
        {props.loggedInUser.id ? (
          <div>
            <NavBar key="navBar" />
            <main>
              <Switch>
                <Route exact path="/" component={Home} uiBlocking={this.uiBlocking} uiUnBlocking={this.uiUnBlocking} />
                <Route
                  path="/profile"
                  component={ProfileLayout}
                  uiBlocking={this.uiBlocking}
                  uiUnBlocking={this.uiUnBlocking}
                />
              </Switch>
            </main>
          </div>
        ) : (
          <LoginLayout />
        )}
      </div>
    );
  }
}

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
