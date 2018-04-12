import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Panel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import * as complainActions from '../../actions/complainActions';
import ComplainRow from './ComplainRow';
import Complain from './Complain';

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

  getComplain(complain) {
    this.props.showComplain({
      complainId: complain.id
    });
  }

  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title toggle>List of all the Complaints</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Complain />
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Complaint ID</th>
                <th>Short Description</th>
                <th>Create on</th>
              </tr>
            </thead>
            <tbody>
              {this.props.allComplains.map((ac, i) => (
                <ComplainRow complain={ac} index={i + 1} key={ac.id} onComplainClick={this.getComplain} />
              ))}
            </tbody>
          </Table>
        </Panel.Body>
      </Panel>
    );
  }
}

ListComplain.propTypes = {
  loggedInUser: PropTypes.shape({
    user_id: PropTypes.string,
    id: PropTypes.string
  }),
  allComplains: PropTypes.arrayOf(
    PropTypes.shape({
      complain_type: PropTypes.string
    })
  ).isRequired,
  showComplain: PropTypes.func.isRequired,
  getAllComplain: PropTypes.func.isRequired
};

ListComplain.defaultProps = {
  loggedInUser: {}
};

const mapDispatchToProps = {
  getAllComplain: complainActions.getAllComplain,
  showComplain: complainActions.showComplain
};

const mapStateToProps = ({ complainReducer, loginReducer }) => ({
  loggedInUser: loginReducer.loggedInUser,
  allComplains: complainReducer.allComplains
});

export default connect(mapStateToProps, mapDispatchToProps)(ListComplain);
