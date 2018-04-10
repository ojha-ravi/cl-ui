import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import CaptureComplain from '../components/CaptureComplain';

class Home extends Component {
  constructor(props) {
    super(props);
    this.logComplaint = this.logComplaint.bind(this);
    this.state = {
      loggingComplaint: false
    };
  }

  logComplaint() {
    this.setState({
      loggingComplaint: !this.state.loggingComplaint
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.props.loggedInUser.user_type === 'consumer'
              ? [
                <Button key="log" bsStyle="success" onClick={this.logComplaint}>
                    Log Complaint
                </Button>,
                  '  ',
                <Button key="list" onClick={this.logComplaint}>
                    List All Complaint
                </Button>
                ]
              : 'you are a lawyer'}
          </div>
          <div className="row padding-top-20px">{this.state.loggingComplaint ? <CaptureComplain /> : null}</div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  loggedInUser: PropTypes.shape({
    userId: PropTypes.string,
    id: PropTypes.string,
    user_type: PropTypes.string
  })
};

Home.defaultProps = {
  loggedInUser: {}
};

const mapStateToProps = ({ loginReducer }) => ({
  loggedInUser: loginReducer.loggedInUser
});

export default connect(mapStateToProps)(Home);
