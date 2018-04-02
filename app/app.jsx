import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginLayout from './login/Index';
import ProfileLayout from './profile/Index';

const App = props => (
  <div>{props.loggedInUser.id ? <ProfileLayout loggedInUser={props.loggedInUser} /> : <LoginLayout />}</div>
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

export default connect(mapStateToProps)(App);
