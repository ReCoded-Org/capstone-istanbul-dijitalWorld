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
          <div className="articleContainer">
            <h2>{t('about.ourStory.header')}</h2>
            <p>{t('about.ourStory.body')}</p>
          </div>
          <div className="articleContainer">
            <h2>{t('about.ourMission.header')}</h2>
            <p>{t('about.ourMission.body')}</p>
          </div>
          <div className="articleContainer">
            <h2>{t('about.ourTeam.header')}</h2>
            <p>{t('about.ourTeam.body')}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutContent;
