import React from 'react';
import { connect } from 'react-redux';
import { ControlLabel, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import moment from 'moment';
import * as complainActions from '../../actions/complainActions';
import * as complainHandler from '../../apiHandler/document';
import CommonModal from '../common/CommonModal';
import UploadFiles from './UploadFiles';

class Complain extends React.Component {
  constructor(props) {
    super(props);
    this.onModalOnClose = this.onModalOnClose.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleFileDelete = this.handleFileDelete.bind(this);

    this.state = {
      uploadedDocument: []
    };
  }

  onModalOnClose() {
    this.props.removeCurrentComplainSelection();
  }

  handleFileUpload({ target: { files } }) {
    const file = files[0];
    return complainHandler
      .uploadDocument({
        file,
        name: file.name,
        complainId: this.props.selectedComplain.id
      })
      .then(res => {
        this.setState({
          uploadedDocument: [...this.state.uploadedDocument, res.data]
        });
        return res;
      });
  }

  handleFileDelete(fileName) {
    complainHandler
      .deleteDocument({
        fileName
      })
      .then(res => {
        this.setState({
          uploadedDocument: this.state.uploadedDocument.filter(f => f !== res.data)
        });
      });
  }

  render() {
    const { selectedComplain } = this.props;
    return (
      <CommonModal
        modalTitle="Complain"
        onClose={this.onModalOnClose}
        showModal={!!selectedComplain.id}
        modalBody={
          <div>
            <Row>
              <Col sm={4}>
                <ControlLabel>Complain ID</ControlLabel>
              </Col>
              <Col sm={8}>
                <ControlLabel>{selectedComplain.id}</ControlLabel>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <ControlLabel>Short Description</ControlLabel>
              </Col>
              <Col sm={8}>
                <ControlLabel>{selectedComplain.short_description}</ControlLabel>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <ControlLabel>Long Description</ControlLabel>
              </Col>
              <Col sm={8}>
                <ControlLabel>{selectedComplain.long_description}</ControlLabel>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <ControlLabel>Country</ControlLabel>
              </Col>
              <Col sm={8}>
                <ControlLabel>{selectedComplain.country}</ControlLabel>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <ControlLabel>State</ControlLabel>
              </Col>
              <Col sm={8}>
                <ControlLabel>{selectedComplain.state}</ControlLabel>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <ControlLabel>FIR Filled Number</ControlLabel>
              </Col>
              <Col sm={8}>
                <ControlLabel>{selectedComplain.fir_filed_number}</ControlLabel>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <ControlLabel>Create At</ControlLabel>
              </Col>
              <Col sm={8}>
                <ControlLabel>{moment(selectedComplain.created_at).format('DD-MM-YYYY')}</ControlLabel>
              </Col>
            </Row>

            <Row>
              <Col sm={6}>
                <UploadFiles
                  uploadedDocument={this.state.uploadedDocument}
                  handleFileDelete={this.handleFileDelete}
                  handleFileUpload={this.handleFileUpload}
                />
              </Col>
            </Row>
          </div>
        }
      />
    );
  }
}

Complain.propTypes = {
  removeCurrentComplainSelection: PropTypes.func.isRequired,
  selectedComplain: PropTypes.shape({
    complain_type: PropTypes.string,
    short_description: PropTypes.string,
    long_description: PropTypes.string,
    country: PropTypes.string,
    state: PropTypes.string,
    fir_filed_number: PropTypes.string,
    created_at: PropTypes.string,
    id: PropTypes.string
  }).isRequired
};

const mapDispatchToProps = {
  removeCurrentComplainSelection: complainActions.removeCurrentComplainSelection
};

const mapStateToProps = ({ complainReducer, loginReducer }) => ({
  loggedInUser: loginReducer.loggedInUser,
  selectedComplain: complainReducer.selectedComplain
});

export default connect(mapStateToProps, mapDispatchToProps)(Complain);
