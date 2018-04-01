import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import img from '../../assets/cls.jpg';
import LoginWindow from './LoginWindow';
import login from '../actions/loginActions';

class Index extends Component {
  componentDidMount() {
    this.props.login();
  }

  render() {
    return (
      <div className="main">
        <img className="bg-img" src={img} alt="Login" />
        <LoginWindow />
      </div>
    );
  }
}

Index.propTypes = {
  login: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  login
};

export default withRouter(connect(undefined, mapDispatchToProps)(Index));
