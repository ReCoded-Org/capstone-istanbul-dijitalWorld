import React from 'react';
import './AboutCarousel.css';
import Carousel from 'react-bootstrap/Carousel';
import teamMember0 from './images/girl.svg';
import teamMember1 from './images/actress.svg';
import teamMember2 from './images/doctor.svg';
import teamMember3 from './images/businessMan.svg';
import teamMember4 from './images/callCenterAgent.svg';
import teamMember5 from './images/dentist.svg';
import { useTranslation } from 'react-i18next';
import { Col, Row, Container, Card } from 'react-bootstrap';

export default function AboutCarousel() {
  const { t } = useTranslation();
  const teamPhotos = [teamMember0, teamMember1, teamMember2, teamMember3, teamMember4, teamMember5];
  const MinimumNumber = 0;
  const MiddleNumber = 3;
  const MaxNumber = 6;

  function renderDesktopView() {
    const allMembersCards = teamPhotos.map(function (e, index) {
      return (
        <Col md>
          <Row className="teamCard">
            <Col sm="4">
              <img src={e} alt="Team Member" />
            </Col>
            <Col md className="cardTexts">
              <h4>{t(`about.name.${index}`)}</h4>
              <p>{t(`about.title.${index}`)}</p>
            </Col>
          </Row>
        </Col>
      );
    });
    return allMembersCards;
  }

  function renderPhoneView() {
    const singleCardCarousel = teamPhotos.map(function (e, index) {
      return (
        <Carousel.Item className="carouselCardSingle">
          <Card border="white" style={{ width: '56%' }} className="memberCard">
            <Card.Body className="text-center">
              <img src={e} alt="Team Member" />
              <h4>{t(`about.name.${index}`)}</h4>
              <p>{t(`about.title.${index}`)}</p>
            </Card.Body>
          </Card>
        </Carousel.Item>
      );
    });
    return singleCardCarousel;
  }

  function rendertableView() {
    const threeCardsCarousel = teamPhotos.map(function (e, index) {
      return (
        <Col>
          <Card border="white" style={{ width: '12rem' }} className="memberCard">
            <Card.Body className="text-center">
              <img src={e} alt="Team Member" />
              <h4>{t(`about.name.${index}`)}</h4>
              <p>{t(`about.title.${index}`)}</p>
            </Card.Body>
          </Card>
        </Col>
      );
    });
    return threeCardsCarousel;
  }

  return (
    <div className="allTeamsContent">
      <Container className="allMembersView">
        <Row>{renderDesktopView().slice(MinimumNumber, MiddleNumber)}</Row>
        <Row>{renderDesktopView().slice(MiddleNumber, MaxNumber)}</Row>
      </Container>
      <Container className="singleCardCarouselView">
        <Carousel>{renderPhoneView()}</Carousel>
      </Container>
      <Container className="threeCardsCarouselView">
        <Carousel>
          <Carousel.Item>
            <Row>{rendertableView().slice(MinimumNumber, MiddleNumber)}</Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>{rendertableView().slice(MiddleNumber, MaxNumber)}</Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}
