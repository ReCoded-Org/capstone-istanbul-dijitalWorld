import React from 'react';
import ContactUsForm from '../../components/contactUsForm/ContactUsForm';
import ContactUsMap from '../../components/contactUsMap/ContactUsMap';
import { Row, Container } from 'react-bootstrap';

export default function ContactUsPage() {
  return (
    <Container>
      <Row className="flex-column-reverse flex-lg-row justify-content-around">
        <ContactUsMap />
        <ContactUsForm />
      </Row>
    </Container>
  );
}
