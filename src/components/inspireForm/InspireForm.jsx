import React, { useState } from 'react';
import './InspireForm.css';
import { fireStore } from '../../firebase';
import { Form, Col, Row, Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function InspireForm() {
  const { t } = useTranslation();
  const [inspireForm, setInspireForm] = useState({
    headline: '',
    category: '',
    story: '',
  });
  const [show, setShow] = useState(false);

  function ThankYouPopUp() {
    return (
      <>
        <Alert
          show={show}
          variant="success"
          className="m-auto"
          onClose={() => setShow(false)}
          dismissible
        >
          <Alert.Heading>Thank You!</Alert.Heading>
          <p>
            Thank you for submitting your story and having the courage to share!
            <br />
            Our admins will review the story and help you get it out there as soon as possible!
          </p>
          <hr />
        </Alert>
      </>
    );
  }

  const handleInput = (key) => (e) => {
    setInspireForm({ ...inspireForm, [key]: e.target.value });
  };

  const handleSubmitStory = (e) => {
    e.preventDefault();

    const newStory = fireStore.collection('inspire').doc();
    newStory.set({
      headline: inspireForm.headline,
      category: inspireForm.category,
      story: inspireForm.story,
    });

    setInspireForm({
      headline: '',
      category: '',
      story: '',
    });
    setShow(true);
  };

  return (
    <Form className="inspireForm" onSubmit={handleSubmitStory}>
      <h3 className="inspireFormHero">
        Here is the perfect space to share your struggle or success
      </h3>
      <Row className="inspireFirstRow">
        <Col>
          <Form.Group>
            <Form.Control
              size="lg"
              type="input"
              placeholder={t('inspire.subject')}
              className="inspireInputBox"
              onChange={handleInput('headline')}
              value={inspireForm.headline}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Control
              size="lg"
              as="select"
              className="inspireInputBox"
              onChange={handleInput('category')}
              value={inspireForm.category}
              required
            >
              <option default>{t('inspire.category.0')}</option>
              <option>{t('inspire.category.1')}</option>
              <option>{t('inspire.category.2')}</option>
              <option>{t('inspire.category.3')}</option>
              <option>{t('inspire.category.4')}</option>
              <option>{t('inspire.category.5')}</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group>
        <Form.Control
          as="textarea"
          rows="15"
          placeholder={t('inspire.story')}
          className="inspireInputBox"
          onChange={handleInput('story')}
          value={inspireForm.story}
          required
        />
      </Form.Group>
      <Row>
        <ThankYouPopUp />
      </Row>
      <Row className="inspireButtonRow mt-3">
        <button type="submit" className="inspireButton">
          {t('inspire.button')}
        </button>
      </Row>
    </Form>
  );
}
