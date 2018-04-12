import React, { Component } from 'react';
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

export default ComplainRow;
