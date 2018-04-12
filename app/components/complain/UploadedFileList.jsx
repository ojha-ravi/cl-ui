import React, { Component } from 'react';
import { ListGroupItem, Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';

class UploadedFileList extends Component {
  constructor(props) {
    super(props);
    this.handleFileDelete = this.handleFileDelete.bind(this);
  }

  handleFileDelete() {
    this.props.handleFileDelete(this.props.doc);
  }

  render() {
    return (
      <ListGroupItem className="uploaded-doc">
        {this.props.doc} {'  '}
        <Badge onClick={this.handleFileDelete}>X</Badge>
      </ListGroupItem>
    );
  }
}

UploadedFileList.propTypes = {
  doc: PropTypes.string.isRequired,
  handleFileDelete: PropTypes.func.isRequired
};

export default UploadedFileList;
