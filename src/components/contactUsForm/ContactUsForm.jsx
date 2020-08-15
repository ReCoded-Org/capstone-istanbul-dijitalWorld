import React, { useState } from 'react';
import './ContactUsForm.css';
import { fireStore } from '../../firebase';
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
            Our tean will review your message and get back to you if needed.
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

    const newMessage = fireStore.collection('contactUs').doc();
    newMessage.set({
      email: email,
      message: message,
    });
    setShow(true);
  };

  return (
    <Form className="contactFormContainer" onSubmit={handleSubmitMessage}>
      <Row>
        <Col>
          <h3 className="contactUsHero">{t('contactUs.getInTouch.header')}</h3>
          <h5>{t('contactUs.getInTouch.subheader')}</h5>

          <Form.Group>
            <Form.Control
              size="lg"
              type="email"
              className="contactUsInput"
              placeholder={t('contactUs.email')}
              onChange={handleEmailInput}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              rows="10"
              className="contactUsInput"
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
