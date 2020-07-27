import React, { useState } from 'react';
import './InspireForm.css';
import database from '../../firebase';
import { Form, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function InspireForm() {
  const { t } = useTranslation();
  const [headline, setHeadline] = useState();
  const [category, setCategory] = useState();
  const [story, setStory] = useState();

  const headlineInput = async (e) => {
    setHeadline(e.target.value);
  };

  const categoryInput = async (e) => {
    setCategory(e.target.value);
  };

  const storyInput = async (e) => {
    setStory(e.target.value);
  };

  const submitStory = (e) => {
    e.preventDefault();
    database.collection('inspire').doc('Stories').set({
      Headline: headline,
      category: category,
      story: story,
    });
  };
  return (
    <Form className="inspireForm" onSubmit={submitStory}>
      <Row className="firstRow">
        <Col>
          <Form.Group>
            <Form.Control
              size="lg"
              type="input"
              placeholder={t('inspire.subject')}
              className="inputBox"
              onChange={headlineInput}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Control size="lg" as="select" className="inputBox" onChange={categoryInput}>
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
          className="inputBox"
          onChange={storyInput}
        />
      </Form.Group>
      <Row className="buttonRow">
        <button type="submit" className="inspireButton">
          Inspire
        </button>
      </Row>
    </Form>
  );
}
