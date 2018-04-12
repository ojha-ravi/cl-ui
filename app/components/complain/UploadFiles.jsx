import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, ControlLabel, ListGroup, FormGroup } from 'react-bootstrap';
import UploadedFileList from './UploadedFileList';

class UploadFiles extends Component {
  handleFileUpload(e) {
    this.props.handleFileUpload(e).then(() => {
      this.uploadInput.value = null;
    });
  }

  render() {
    return (
      <div>
        <Col sm={6}>
          <FormGroup>
            <ControlLabel>Upload Relevant Files</ControlLabel>
            {this.props.uploadedDocument.length > 0 ? (
              <ListGroup>
                {this.props.uploadedDocument.map(doc => (
                  <UploadedFileList key={doc} doc={doc} handleFileDelete={this.props.handleFileDelete} />
                ))}
              </ListGroup>
            ) : null}

            <input
              placeholder="Files"
              type="file"
              ref={ref => {
                this.uploadInput = ref;
              }}
              onChange={this.props.handleFileUpload}
            />
          </FormGroup>
        </Col>
      </div>
    );
  }
}

UploadFiles.propTypes = {
  uploadedDocument: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleFileDelete: PropTypes.func.isRequired,
  handleFileUpload: PropTypes.func.isRequired
};

export default UploadFiles;
