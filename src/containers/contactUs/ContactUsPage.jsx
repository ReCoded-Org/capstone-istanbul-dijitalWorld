import React from 'react';
import ContactUsForm from '../../components/contactUsForm/ContactUsForm';
import ContactUsMap from '../../components/contactUsMap/ContactUsMap';
import { Row, Col } from 'react-bootstrap';

export default function ContactUsPage() {
  return (
    <Row className="contactUsContainer">
      <Col md="1"></Col>
      <ContactUsMap />
      <ContactUsForm />
    </Row>
  );
}
