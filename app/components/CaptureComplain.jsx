import React, { Component } from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Panel,
  Col,
  Badge,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';
import Select from 'react-select';
import * as complainHandler from '../apiHandler/complainHandler';

class CaptureComplain extends Component {
  constructor(props) {
    super(props);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleFileDelete = this.handleFileDelete.bind(this);
    this.state = {
      uploadedDocument: []
    };
  }

  handleFileUpload({ target: { files } }) {
    const file = files[0];
    complainHandler
      .uploadDocument({
        file,
        name: file.name
      })
      .then(res => {
        this.setState({
          uploadedDocument: [...this.state.uploadedDocument, res.data]
        });
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
                options={[
                  { value: 'divorce', label: 'Divorce' },
                  { value: 'murder', label: 'Murder' },
                  { value: 'accident', label: 'Accident' },
                  { value: 'consumer_forum', label: 'Consumer Forum' }
                ]}
              />
            </FormGroup>
          </Col>

          <Col sm={12}>
            <FormGroup>
              <ControlLabel>Complain Details</ControlLabel>
              <FormControl componentClass="textarea" placeholder="Short description of the incidence" />
            </FormGroup>
          </Col>

          <Col sm={6}>
            <FormGroup>
              <ControlLabel>Upload Relevant Files</ControlLabel>
              {this.state.uploadedDocument.length > 0 ? (
                <ListGroup>
                  {this.state.uploadedDocument.map((doc, i) => (
                    <ListGroupItem key={i} className="uploaded-doc">
                      {doc} {'  '}
                      <Badge onClick={this.handleFileDelete.bind(this, doc)}>X</Badge>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              ) : null}

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
