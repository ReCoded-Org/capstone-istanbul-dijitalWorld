import React from 'react';
import ContactUsForm from '../../components/contactUsForm/ContactUsForm';
import ContactUsMap from '../../components/contactUsMap/ContactUsMap';
import { Row, Col, Container } from 'react-bootstrap';

export default function ContactUsPage() {
  return (
    <Container>
      <Row className="contactUsContainer">
        <ContactUsMap />
        <ContactUsForm />
      </Row>
    </Container>
  );
}
