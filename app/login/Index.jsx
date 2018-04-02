import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import img from '../../assets/cls.jpg';
import LoginWindow from './LoginWindow';
import { login } from '../actions/loginActions';

const Index = props => (
  <div className="main">
    <img className="bg-img" src={img} alt="Login" />
    <LoginWindow onLoginClick={props.login} />
  </div>
);

Index.propTypes = {
  login: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  login
};

export default withRouter(connect(undefined, mapDispatchToProps)(Index));
