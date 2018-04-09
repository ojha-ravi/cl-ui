import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, FormGroup, FormControl, Checkbox, Button } from 'react-bootstrap';
import logo from '../../assets/logo.png';

class LoginWindow extends Component {
  constructor(props) {
    super(props);
    this.onLoginClick = this.onLoginClick.bind(this);
    this.onUserIdChange = this.onUserIdChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.state = {
      userId: '',
      password: ''
    };
  }

  onLoginClick(event) {
    event.preventDefault();
    event.stopPropagation();
    const { userId, password } = this.state;
    this.props.onLoginClick({
      userId,
      password
    });
  }

  onUserIdChange(e) {
    this.setState({
      userId: e.target.value
    });
  }

  onPasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="login-window" />
        <div className="login-panel">
          <img src={logo} alt="Logo" className="main-logo" />
          <Form>
            <FormGroup controlId="formHorizontalEmail">
              <h5>Username or Email</h5>
              <FormControl type="text" onChange={this.onUserIdChange} value={this.state.userId} />
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <h5>Password</h5>
              <FormControl
                type="password"
                onChange={this.onPasswordChange}
                value={this.state.password}
                currentpassword="password123"
              />
            </FormGroup>
            <FormGroup>
              <Link to="/forgotpassword">Forgot Password?</Link>
            </FormGroup>
            <FormGroup>
              <div className="full-btn">
                <Button type="submit" bsStyle="primary" onClick={this.onLoginClick}>
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
  }
}

LoginWindow.propTypes = {
  onLoginClick: PropTypes.func.isRequired
};

export default LoginWindow;
