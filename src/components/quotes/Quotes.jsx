import React from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import safeImage from '../../images/safe_image.jpeg';
import leonImage from '../../images/leon-biss.jpg';
import kidsImage from '../../images/small-kids.png';
import './Quotes.css';

const Quotes = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Row data-testid="sayHerNameRow">
        <Col xl={6} lg={12} md={12} className="contentColumns">
          <h2 className="sayHerName" style={{ fontWeight: 'bold' }}>
            {t('home.quotes.sayHerName.hashtag')}
          </h2>
          <h2 className="sayHerName">{t('home.quotes.sayHerName.title')}</h2>
          <span className="sayHerNameAuthor">{t('home.quotes.sayHerName.author')}</span>
        </Col>
        <Col xl={6} lg={12} md={12} className="contentColumns">
          <Image src={safeImage} fluid />
        </Col>
      </Row>
      <Row data-testid="anOpenLetterRow">
        <Col xl={6} lg={12} md={12} className="contentColumns">
          <Image src={leonImage} fluid />
        </Col>
        <Col xl={6} lg={12} md={12} className="contentColumns">
          <div className="contentContainer">
            <h2 className="openLetter">{t('home.quotes.openLetter.title')}</h2>
            <span className="anonymous">{t('home.quotes.openLetter.author')}</span>
          </div>
        </Col>
      </Row>
      <Row data-testid="fightForGirlsRow">
        <Col xl={6} lg={12} md={12} className="contentColumns">
          <h2 className="fightForGirls">{t('home.quotes.girlsFight.title')}</h2>
          <button type="button" className="donateButton" data-testid="button">
            {t('home.quotes.girlsFight.button')}
          </button>
        </Col>
        <Col xl={6} lg={12} md={12} className="contentColumns">
          <Image src={kidsImage} fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Quotes;
