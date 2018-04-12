import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as complainActions from '../../actions/complainActions';

class ListComplain extends Component {
  constructor(props) {
    super(props);
    this.getComplain = this.getComplain.bind(this);
  }

  componentDidMount() {
    this.props.getAllComplain({
      userId: this.props.loggedInUser.user_id
    });
  }

  getComplain() {}

  render() {
    console.log(this.props.allComplains);
    return <div>Hello World</div>;
  }
}

ListComplain.propTypes = {
  loggedInUser: PropTypes.shape({
    user_id: PropTypes.string,
    id: PropTypes.string
  }),
  allComplains: PropTypes.shape({
    complain_type: PropTypes.string
  }).isRequired,
  getAllComplain: PropTypes.func.isRequired
};

ListComplain.defaultProps = {
  loggedInUser: {}
};

const mapDispatchToProps = {
  getAllComplain: complainActions.getAllComplain
};

const mapStateToProps = ({ complainReducer, loginReducer }) => ({
  loggedInUser: loginReducer.loggedInUser,
  allComplains: complainReducer.allComplains
});

export default connect(mapStateToProps, mapDispatchToProps)(ListComplain);
