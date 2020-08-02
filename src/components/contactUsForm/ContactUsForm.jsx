import React, { useState } from 'react';
import './ContactUsForm.css';
import database from '../../firebase';
import { Form, Col, Row, Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function ContactUs() {
  const { t } = useTranslation();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [show, setShow] = useState(false);

  function ThankYouPopUp() {
    return (
      <>
        <Alert show={show} variant="success">
          <Alert.Heading>Thank You!</Alert.Heading>
          <p>
            Thank you for submitting this message.
            <br />
            Our admins will review your message and get back to you if needed.
          </p>
          <hr />
        </Alert>
      </>
    );
  }

  const handleEmailInput = async (e) => {
    setEmail(e.target.value);
  };

  const handleMessageInput = async (e) => {
    setMessage(e.target.value);
  };

  const handleSubmitMessage = (e) => {
    e.preventDefault();

    const newMessage = database.collection('contactUs').doc();
    newMessage.set({
      email: email,
      message: message,
    });
    setShow(true);
  };

  return (
    <Form onSubmit={handleSubmitMessage}>
      <Row>
        <Col>
          <h3 className="contactUsHero">{t('contactUs.getInTouch.0')}</h3>
          <h5>{t('contactUs.getInTouch.1')}</h5>

          <Form.Group>
            <Form.Control
              size="lg"
              type="email"
              placeholder={t('contactUs.email')}
              onChange={handleEmailInput}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              rows="10"
              placeholder={t('contactUs.message')}
              onChange={handleMessageInput}
              required
            />
          </Form.Group>
          <button type="submit" className="contactUsButton">
            {t('contactUs.button')}
          </button>
        </Col>
      </Row>
      <Row>
        <ThankYouPopUp />
      </Row>
    </Form>
  );
}
