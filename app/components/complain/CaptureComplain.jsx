import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl, Button, Panel, Col, Row } from 'react-bootstrap';
import Select from 'react-select';
import * as complainHandler from '../../apiHandler/document';
import * as UC from '../../constants/uiConstants';
import UploadFiles from './UploadFiles';
import * as complainActions from '../../actions/complainActions';

class CaptureComplain extends Component {
  constructor(props) {
    super(props);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleFileDelete = this.handleFileDelete.bind(this);
    this.handleOnShortDescriptionChange = this.handleOnChange.bind(this, 'shortDescription');
    this.handleOnLongDescriptionChange = this.handleOnChange.bind(this, 'longDescription');
    this.handleOnActionTypeChange = this.handleOnChange.bind(this, 'accidentType');
    this.handleOnCountryChange = this.handleOnChange.bind(this, 'country');
    this.handleOnStateChange = this.handleOnChange.bind(this, 'state');
    this.handleOnPlaceChange = this.handleOnChange.bind(this, 'place');
    this.handleOnFirFilledChange = this.handleOnChange.bind(this, 'fir');
    this.saveComplain = this.saveComplain.bind(this);
    this.state = {
      shortDesc: '',
      longDesc: '',
      accidentType: null,
      country: null,
      state: null,
      place: null,
      firNumber: '',
      uploadedDocument: []
    };
  }

  handleFileUpload({ target: { files } }) {
    const file = files[0];
    return complainHandler
      .uploadDocument({
        file,
        name: file.name
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

  handleOnChange(control, val) {
    switch (control) {
      case 'shortDescription':
        this.setState({
          shortDesc: val.target.value
        });
        break;
      case 'longDescription':
        this.setState({
          longDesc: val.target.value
        });
        break;
      case 'accidentType':
        this.setState({
          accidentType: val
        });
        break;
      case 'country':
        this.setState({
          country: val
        });
        break;
      case 'state':
        this.setState({
          state: val
        });
        break;
      case 'place':
        this.setState({
          place: val
        });
        break;
      case 'fir':
        this.setState({
          firNumber: val.target.value
        });
        break;
      default:
        break;
    }
  }

  saveComplain() {
    this.props.saveComplain({
      short_description: this.state.shortDesc,
      long_description: this.state.longDesc,
      complain_type: this.state.accidentType.label,
      country: this.state.country.label,
      state: this.state.state.label,
      place: this.state.place.label,
      fir_filed_number: this.state.firNumber,
      create_by: this.props.loggedInUser.user_id
    });
  }

  render() {
    return (
      <Panel eventKey="1" defaultExpanded>
        <Panel.Heading>
          <Panel.Title toggle>Enter the complaint details</Panel.Title>
        </Panel.Heading>
        <Panel.Body collapsible>
          <Col sm={12}>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Short Description Of Complain</ControlLabel>
              <FormControl
                componentClass="input"
                placeholder="Short Description"
                onChange={this.handleOnShortDescriptionChange}
                value={this.state.shortDesc}
              />
            </FormGroup>
          </Col>
          <Col sm={12}>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Tell Us What Happened In Detail</ControlLabel>
              <FormControl
                componentClass="textarea"
                placeholder="Long Description"
                onChange={this.handleOnLongDescriptionChange}
                value={this.state.longDesc}
              />
            </FormGroup>
          </Col>
          <Row>
            <Col sm={12}>
              <Col sm={4}>
                <FormGroup>
                  <ControlLabel>Type Of Complain</ControlLabel>
                  <Select
                    value={this.state.accidentType}
                    name="form-field-name"
                    options={UC.accidentType}
                    onChange={this.handleOnActionTypeChange}
                    placeholder="Select Type Of Complain"
                  />
                </FormGroup>
              </Col>

              <Col sm={4}>
                <FormGroup>
                  <ControlLabel>FIR Filled Number</ControlLabel>
                  <FormControl
                    componentClass="input"
                    placeholder="Short Description"
                    onChange={this.handleOnFirFilledChange}
                    value={this.state.firNumber}
                  />
                </FormGroup>
              </Col>
            </Col>
          </Row>
          <Col sm={4}>
            <FormGroup>
              <ControlLabel>Country Of Incidence</ControlLabel>
              <Select
                value={this.state.country}
                name="form-field-name"
                options={UC.country}
                onChange={this.handleOnCountryChange}
                placeholder="Select Country"
              />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <ControlLabel>State Of Incidence</ControlLabel>
              <Select
                value={this.state.state}
                name="form-field-name"
                options={UC.indianState}
                onChange={this.handleOnStateChange}
                placeholder="Select State"
              />
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup>
              <ControlLabel>Place Of Incidence</ControlLabel>
              <Select
                value={this.state.place}
                name="form-field-name"
                options={UC.indianPlace}
                onChange={this.handleOnPlaceChange}
                placeholder="Select State"
              />
            </FormGroup>
          </Col>
          <UploadFiles
            uploadedDocument={this.state.uploadedDocument}
            handleFileDelete={this.handleFileDelete}
            handleFileUpload={this.handleFileUpload}
          />

          <FormGroup>
            <Col sm={12}>
              <Button type="submit" bsStyle="primary" onClick={this.saveComplain}>
                Submit
              </Button>{' '}
              <Button type="submit">Reset</Button>
            </Col>
          </FormGroup>
        </Panel.Body>
      </Panel>
    );
  }
}

CaptureComplain.propTypes = {
  loggedInUser: PropTypes.shape({
    user_id: PropTypes.string,
    id: PropTypes.string
  }),
  saveComplain: PropTypes.func.isRequired
};

CaptureComplain.defaultProps = {
  loggedInUser: {}
};

const mapDispatchToProps = {
  saveComplain: complainActions.saveComplain,
  updateComplain: complainActions.updateComplain
};

const mapStateToProps = ({ complainReducer, loginReducer }) => ({
  loggedInUser: loginReducer.loggedInUser,
  currentComplain: complainReducer.currentComplain,
  allComplains: complainReducer.allComplains
});

export default connect(mapStateToProps, mapDispatchToProps)(CaptureComplain);
