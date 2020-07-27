import React from 'react';
import './InspireForm.css';
// import database from '../../firebase'
import { Form, Col, Row , Button} from 'react-bootstrap';


export default function InspireForm() {
    return (
           <Form className="inspireForm">
               <Row className="firstRow">
            <Col>
      <Form.Group>
      <Form.Label><h3>Suggest A Headline</h3></Form.Label>
    <Form.Control  size="lg" type="email" placeholder="Subject" className="inputBox"/>
  </Form.Group></Col>
  <Col>
  <Form.Group>
  <Form.Label><h3>Select Category</h3></Form.Label>
    <Form.Control size="lg" as="select" className="inputBox">
    <option default>Category</option>
      <option>Education</option>
      <option>Work</option>
      <option>Family</option>
      <option>Social</option>
      <option>Other</option>
    </Form.Control>
  </Form.Group></Col>
  </Row>
  <Form.Group>
    <Form.Control as="textarea" rows="20"placeholder="Your Story" className="inputBox"/>
  </Form.Group>
      <Row className="buttonRow">
  <Button className="inspireButton">Inspire</Button>
  </Row>
</Form> 
    )
}