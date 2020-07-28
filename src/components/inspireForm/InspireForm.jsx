import React, { useState } from 'react';
import './InspireForm.css';
import database from '../../firebase';
import { Form, Col, Row, Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function InspireForm() {
  const { t } = useTranslation();
  const [headline, setHeadline] = useState();
  const [category, setCategory] = useState();
  const [story, setStory] = useState();
  const [show, setShow] = useState(false);

  const handleHeadlineInput = async (e) => {
    setHeadline(e.target.value);
  };

  const handleCategoryInput = async (e) => {
    setCategory(e.target.value);
  };

  const handleStoryInput = async (e) => {
    setStory(e.target.value);
  };
  function ThankYouPopUp() {
  
    return (
      <>
        <Alert show={show} variant="success">
          <Alert.Heading>Thank You!</Alert.Heading>
          <p>
           Thank you for submitting your story and having the courage to share!<br/>
           Our admins will review the story and help you get it out there as soon as possible!
          
          </p>
          <hr />
        </Alert>
        </>
    );
  }  

  const handleSubmitStory = (e) => {
    e.preventDefault();

    const newStory= database.collection('inspire').doc()
    newStory.set({
      headline: headline,
      category: category,
      story: story,
    });
    setShow(true)
  };
  
  return (
    <Form className="inspireForm" onSubmit={handleSubmitStory}>
      <Row className="inspireFirstRow">
        <Col>
          <Form.Group>
            <Form.Control
              size="lg"
              type="input"
              placeholder={t('inspire.subject')}
              className="inspireInputBox"
              onChange={handleHeadlineInput}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Control size="lg" as="select" className="inspireInputBox" onChange={handleCategoryInput}required>
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
          onChange={handleStoryInput}
          required
        />
      </Form.Group>
      <Row><ThankYouPopUp/></Row>
      <Row className="inspireButtonRow">
        <button type="submit" className="inspireButton" >
          Inspire
        </button>
      </Row>
    </Form>
  );
}
