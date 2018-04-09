import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Panel, Col } from 'react-bootstrap';
import Select from 'react-select';
import * as complainHandler from '../apiHandler/complainHandler';

class CaptureComplain extends Component {
  constructor(props) {
    super(props);
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  /* eslint-disable */
  handleFileUpload({ target: { files } }) {
    const file = files[0];
    complainHandler.uploadDocument({
      file,
      name: 'Awesome Cat Pic'
    });
  }
  /* eslint-enable */

  render() {
    return (
      <Panel eventKey="1" defaultExpanded>
        <Panel.Heading>
          <Panel.Title toggle>Enter the complaint details</Panel.Title>
        </Panel.Heading>
        <Panel.Body collapsible>
          <FormGroup>
            <Col sm={3}>
              <ControlLabel>Title</ControlLabel>
              <Select
                name="form-field-name"
                onChange={this.handleChange}
                options={[{ value: 'mr', label: 'Mr' }, { value: 'ms', label: 'Ms' }, { value: 'mss', label: 'Mss' }]}
              />
            </Col>
            <Col sm={9}>
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Name</ControlLabel>
                <FormControl componentClass="input" placeholder="Name" />
              </FormGroup>
            </Col>
          </FormGroup>

          <Col sm={3}>
            <FormGroup>
              <ControlLabel>Type of complain</ControlLabel>
              <Select
                name="form-field-name"
                onChange={this.handleChange}
                options={[{ value: 'mr', label: 'Mr' }, { value: 'ms', label: 'Ms' }, { value: 'mss', label: 'Mss' }]}
              />
            </FormGroup>
          </Col>

          <Col sm={12}>
            <FormGroup>
              <ControlLabel>Complain Details</ControlLabel>
              <FormControl componentClass="textarea" placeholder="Short description of the incidence" />
            </FormGroup>
          </Col>

          <Col sm={3}>
            <FormGroup>
              <ControlLabel>Upload Relevant Files</ControlLabel>
              <FormControl
                componentClass="input"
                placeholder="Enter the desired name of file"
                type="text"
                ref={ref => {
                  this.fileName = ref;
                }}
              />
              <FormControl
                componentClass="input"
                placeholder="Files"
                type="file"
                ref={ref => {
                  this.uploadInput = ref;
                }}
                onChange={this.handleFileUpload}
              />
            </FormGroup>
          </Col>

          <FormGroup>
            <Col sm={12}>
              <Button type="submit" bsStyle="primary">
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

// const mapDispatchToProps = {
//   getUserProfile: profileActions.getUserProfile
// };

export default CaptureComplain;
