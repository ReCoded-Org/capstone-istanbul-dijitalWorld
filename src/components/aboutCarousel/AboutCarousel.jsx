import React from 'react';
import './AboutCarousel.css';
import Person from './images/actress.svg';
import { useTranslation } from 'react-i18next';
import { Col, Row, Container } from 'react-bootstrap';

export default function AboutCarousel() {
  const { t } = useTranslation();
  return (
    <Container className="AllCarouselContent">
      <Row>
        <Col>
          <Row className="row">
            <Col>
              <img className="cardImg" src={Person} alt="" />
            </Col>
            <Col>
              <h4>{t('about.name.3')}</h4>
              <p>{t('about.tilte.3')}</p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="row">
            <Col>
              <img className="cardImg" src={Person} alt="" />
            </Col>
            <Col>
              <h4>{t('about.name.4')}</h4>
              <p>{t('about.tilte.4')}</p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="row">
            <Col>
              <img className="cardImg" src={Person} alt="" />
            </Col>
            <Col>
              <h4>{t('about.name.5')}</h4>
              <p>{t('about.tilte.5')}</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row className="row">
            <Col>
              <img className="cardImg" src={Person} alt="" />
            </Col>
            <Col>
              <h4>{t('about.name.0')}</h4>
              <p>{t('about.tilte.0')}</p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="row">
            <Col>
              <img className="cardImg" src={Person} alt="" />
            </Col>
            <Col>
              <h4>{t('about.name.1')}</h4>
              <p>{t('about.tilte.1')}</p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="row">
            <Col>
              <img className="cardImg" src={Person} alt="" />
            </Col>
            <Col>
              <h4>{t('about.name.2')}</h4>
              <p>{t('about.tilte.2')}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
