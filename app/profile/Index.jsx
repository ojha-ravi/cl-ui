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
      </div>
    );
  }
}

Index.propTypes = {
  loggedInUser: PropTypes.shape({
    user_id: PropTypes.string,
    id: PropTypes.string
  }),
  getUserProfile: PropTypes.func.isRequired
};

Index.defaultProps = {
  loggedInUser: {}
};

const mapStateToProps = ({ loginReducer }) => ({ loggedInUser: loginReducer.loggedInUser });

const mapDispatchToProps = {
  getUserProfile: profileActions.getUserProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
