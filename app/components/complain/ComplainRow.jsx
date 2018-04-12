import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class ComplainRow extends Component {
  constructor(props) {
    super(props);
    this.onComplainClick = this.onComplainClick.bind(this);
  }

  onComplainClick() {
    this.props.onComplainClick(this.props.complain);
  }

  render() {
    const { complain, index } = this.props;
    return (
      <tr onClick={this.onComplainClick}>
        <td>{index}</td>
        <td>{complain.id}</td>
        <td>{complain.short_description}</td>
        <td>{moment(complain.created_at).format('DD-MM-YYYY')}</td>
      </tr>
    );
  }
}

ComplainRow.propTypes = {
  complain: PropTypes.shape({
    complain_type: PropTypes.string
  }).isRequired,
  index: PropTypes.number.isRequired,
  onComplainClick: PropTypes.func.isRequired
};

export default ComplainRow;
