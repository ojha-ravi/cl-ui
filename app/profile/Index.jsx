import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as profileActions from '../actions/profileActions';

class Index extends Component {
  componentDidMount() {
    this.props.getUserProfile({
      userId: this.props.loggedInUser.user_id
    });
  }

  render() {
    return (
      <div>
        <pre>
          <code>{JSON.stringify(this.props.loggedInUser, 4, 4)}</code>
        </pre>
        <pre>
          <code>{JSON.stringify(this.props.currentProfile, 4, 4)}</code>
        </pre>
      </div>
    );
  }
}

Index.propTypes = {
  loggedInUser: PropTypes.shape({
    user_id: PropTypes.string,
    id: PropTypes.string
  }),
  currentProfile: PropTypes.shape({
    id: PropTypes.string,
    user_id: PropTypes.string,
    email: PropTypes.string,
    title: PropTypes.string,
    sex: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    middle_name: PropTypes.string,
    work_destination: PropTypes.string,
    address_1: PropTypes.string,
    address_2: PropTypes.string,
    address_3: PropTypes.string,
    profile_image: PropTypes.string
  }),
  getUserProfile: PropTypes.func.isRequired
};

Index.defaultProps = {
  loggedInUser: {},
  currentProfile: {}
};

const mapStateToProps = ({ loginReducer, profileReducer }) => ({
  loggedInUser: loginReducer.loggedInUser,
  currentProfile: profileReducer.currentProfile
});

const mapDispatchToProps = {
  getUserProfile: profileActions.getUserProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
