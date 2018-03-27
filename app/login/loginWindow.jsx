import React from 'react';
import { Form, FormGroup, FormControl, Checkbox, Button } from 'react-bootstrap';
import logo from '../../assets/logo.png';
// import PropTypes from 'prop-types';

const LoginWindow = () => (
  <div>
    <div className="login-window" />
    <div className="login-panel">
      <img src={logo} alt="Logo" className="main-logo" />
      <Form>
        <FormGroup controlId="formHorizontalEmail">
          <h5>Username or Email</h5>
          <FormControl type="text" />
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <h5>Password</h5>
          <FormControl type="password" />
        </FormGroup>
        <FormGroup>
          <a href="google.com">Forgot Password?</a>
        </FormGroup>
        <FormGroup>
          <div className="full-btn">
            <Button type="submit" bsStyle="primary">
              Login
            </Button>
          </div>
        </FormGroup>
        <FormGroup>
          <Checkbox>Remember me</Checkbox>
        </FormGroup>
      </Form>
    </div>
  </div>
);

LoginWindow.propTypes = {};

export default LoginWindow;
