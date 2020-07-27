import React from 'react';
import './AboutContent.css';
import { useTranslation } from 'react-i18next';
import { Col, Row, Container } from 'react-bootstrap';

const AboutContent = () => {
  const { t } = useTranslation();
  return (
    <Container className="allContent">
      <Row>
        <Col>
          <h2>{t('about.header.0')}</h2>
          <p>{t('about.paragraph.0')}</p>
          <h2>{t('about.header.1')}</h2>
          <p>{t('about.paragraph.1')}</p>
          <h2>{t('about.header.2')}</h2>
          <p>{t('about.paragraph.2')}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutContent;
