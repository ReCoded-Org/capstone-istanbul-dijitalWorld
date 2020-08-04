import React from 'react';
import './AboutCarousel.css';
import teamMemeber0 from './images/girl.svg';
import teamMemeber1 from './images/actress.svg';
import teamMemeber2 from './images/doctor.svg';
import teamMemeber3 from './images/bussinessMan.svg';
import teamMemeber4 from './images/callCenterAgent.svg';
import teamMemeber5 from './images/dentist.svg';
import { useTranslation } from 'react-i18next';
import { Col, Row, Container } from 'react-bootstrap';

export default function AboutCarousel() {
  const { t } = useTranslation();
  return (
    <Container className="AllCarouselContent">
      <Row>
        <Col>
          <Row className="TeamCard">
            <Col>
              <img className="cardImg" src={teamMemeber0} alt="" />
            </Col>
            <Col className="cardTexts">
              <h4>{t('about.name.3')}</h4>
              <p>{t('about.tilte.3')}</p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="TeamCard">
            <Col>
              <img className="cardImg" src={teamMemeber1} alt="" />
            </Col>
            <Col className="cardTexts">
              <h4>{t('about.name.4')}</h4>
              <p>{t('about.tilte.4')}</p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="TeamCard">
            <Col>
              <img className="cardImg" src={teamMemeber2} alt="" />
            </Col>
            <Col className="cardTexts">
              <h4>{t('about.name.5')}</h4>
              <p>{t('about.tilte.5')}</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row className="TeamCard">
            <Col>
              <img className="cardImg" src={teamMemeber3} alt="" />
            </Col>
            <Col className="cardTexts">
              <h4>{t('about.name.0')}</h4>
              <p>{t('about.tilte.0')}</p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="TeamCard">
            <Col>
              <img className="cardImg" src={teamMemeber4} alt="" />
            </Col>
            <Col className="cardTexts">
              <h4>{t('about.name.1')}</h4>
              <p>{t('about.tilte.1')}</p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="TeamCard">
            <Col>
              <img className="cardImg" src={teamMemeber5} alt="" />
            </Col>
            <Col className="cardTexts">
              <h4>{t('about.name.2')}</h4>
              <p>{t('about.tilte.2')}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
