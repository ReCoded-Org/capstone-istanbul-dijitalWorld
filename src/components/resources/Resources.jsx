import React from 'react';
import './test.css';
import { Button, Col, Container } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#6c567b', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

export default function Resources() {
  const { t } = useTranslation();
  const renderSlides = () => {
    return t('resourcePage.resources', { returnObjects: true }).map((item) => {
      return (
        <Container className="carouselContainer">
          <Col md="6">
            <p className="permanentTitle">{t('resourcePage.title')}</p>
            <div className="blurpBlock">
              <p className="resourceHeader">{item.header}</p>
              <br></br>
              <p className="resourceBlurp">{item.blurp}</p>
              <Button className="resourceButton">{t('resourcePage.button')}</Button>
            </div>
          </Col>
          <Col md="6">
            <div className="resourceImage">
              <img src={item.img} alt={item.header} />
            </div>
          </Col>
        </Container>
      );
    });
  };

  const settings = {
    className: 'slider',
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    focusOnSelect: true,
    swipeToSlide: true,
    vertical: true,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    slidesToScroll: 1,
    pauseOnFocus: true,
  };
  return (
    <div className="container">
      <Slider {...settings}>{renderSlides()}</Slider>
    </div>
  );
}
