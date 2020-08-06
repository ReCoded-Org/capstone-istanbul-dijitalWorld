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

  function RenderDesktopView() {
    const allMembersCards = teamPhotos.map(function (e, index) {
      return (
        // <Row className="teamCard">
        <Col md="4" className="test1">
          <Row>
            <Col sm="4">
              <img src={e} alt="Team Member" />
            </Col>
            <Col md className="cardTexts">
              <h4>{t(`about.name.${index}`)}</h4>
              <p>{t(`about.title.${index}`)}</p>
            </Col>
          </Row>
        </Col>
        // </Row>
      );
    });
    return allMembersCards;
  }

  function RenderPhonetView() {
    const singleCardCarousel = teamPhotos.map(function (e, index) {
      return (
        <Card border="white" style={{ width: '60%' }} className="memberCard">
          <Card.Body className="text-center">
            <img src={e} alt="Team Member" />
            <h4>{t(`about.name.${index}`)}</h4>
            <p>{t(`about.title.${index}`)}</p>
          </Card.Body>
        </Card>
      );
    });
    return singleCardCarousel;
  }

  return (
    <div className="allTeamsContent">
      <Container className="allMembersView">
        <RenderDesktopView />
      </Container>




      <Container className="singleCardCarouselView">
        <Carousel>
          <Carousel.Item className="carouselCardSingle">
            <RenderPhonetView />
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* <Container className="allMembersView">
        <Row>
          <Col md>
            <Row className="teamCard">
              <Col sm="4">
                <img src={teamMember0} alt="Team Member" />
              </Col>
              <Col md className="cardTexts">
                <h4>{t('about.name.3')}</h4>
                <p>{t('about.title.3')}</p>
              </Col>
            </Row>
          </Col>
          <Col md>
            <Row className="teamCard">
              <Col sm="4">
                <img src={teamMember1} alt="Team Member" />
              </Col>
              <Col md className="cardTexts">
                <h4>{t('about.name.4')}</h4>
                <p>{t('about.title.4')}</p>
              </Col>
            </Row>
          </Col>
          <Col md>
            <Row className="teamCard">
              <Col sm="4">
                <img src={teamMember2} alt="Team Member" />
              </Col>
              <Col md className="cardTexts">
                <h4>{t('about.name.5')}</h4>
                <p>{t('about.title.5')}</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md>
            <Row className="teamCard">
              <Col sm="4">
                <img src={teamMember3} alt="Team Member" />
              </Col>
              <Col md className="cardTexts">
                <h4>{t('about.name.0')}</h4>
                <p>{t('about.title.0')}</p>
              </Col>
            </Row>
          </Col>
          <Col md>
            <Row className="teamCard">
              <Col sm="4">
                <img src={teamMember4} alt="Team Member" />
              </Col>
              <Col md className="cardTexts">
                <h4>{t('about.name.1')}</h4>
                <p>{t('about.title.1')}</p>
              </Col>
            </Row>
          </Col>
          <Col md>
            <Row className="teamCard">
              <Col sm="4">
                <img src={teamMember5} alt="Team Member" />
              </Col>
              <Col md className="cardTexts">
                <h4>{t('about.name.2')}</h4>
                <p>{t('about.title.2')}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container> */}
      <Container className="threeCardsCarouselView">
        <Carousel>
          <Carousel.Item>
            <Row>
              <Col>
                <Card border="white" style={{ width: '12rem' }} className="memberCard">
                  <Card.Body className="text-center">
                    <img src={teamMember0} alt="Team Member" />
                    <h4>{t('about.name.0')}</h4>
                    <p>{t('about.title.0')}</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card border="white" style={{ width: '12rem' }} className="memberCard">
                  <Card.Body className="text-center">
                    <img src={teamMember1} alt="Team Member" />
                    <h4>{t('about.name.1')}</h4>
                    <p>{t('about.title.1')}</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card border="white" style={{ width: '12rem' }} className="memberCard">
                  <Card.Body className="text-center">
                    <img src={teamMember2} alt="Team Member" />
                    <h4>{t('about.name.2')}</h4>
                    <p>{t('about.title.2')}</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col>
                <Card border="white" style={{ width: '12rem' }} className="memberCard">
                  <Card.Body className="text-center">
                    <img src={teamMember3} alt="Team Member" />
                    <h4>{t('about.name.3')}</h4>
                    <p>{t('about.title.3')}</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card border="white" style={{ width: '12rem' }} className="memberCard">
                  <Card.Body className="text-center">
                    <img src={teamMember4} alt="Team Member" />
                    <h4>{t('about.name.4')}</h4>
                    <p>{t('about.title.4')}</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card border="white" style={{ width: '12rem' }} className="memberCard">
                  <Card.Body className="text-center">
                  <img src={teamMember5} alt="Team Member" />
                    <h4>{t('about.name.5')}</h4>
                    <p>{t('about.title.5')}</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
      {/* <Container className="singleCardCarouselView">
        <Carousel>
          <Carousel.Item className="carouselCardPhoneView">
            <Card border="white" style={{ width: '50%' }} className="memberCard">
              <Card.Body className="text-center">
                <img className="cardImg" src={teamMember0} alt="Team Member" />
                <h4>{t('about.name.3')}</h4>
                <p>{t('about.title.3')}</p>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item className="carouselCardPhoneView">
            <Card border="white" style={{ width: '50%' }} className="memberCard">
              <Card.Body className="text-center">
                <img className="cardImg" src={teamMember1} alt="Team Member" />
                <h4>{t('about.name.4')}</h4>
                <p>{t('about.title.4')}</p>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item className="carouselCardPhoneView">
            <Card border="white" style={{ width: '50%' }} className="memberCard">
              <Card.Body className="text-center">
                <img className="cardImg" src={teamMember2} alt="Team Member" />
                <h4>{t('about.name.5')}</h4>
                <p>{t('about.title.5')}</p>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item className="carouselCardPhoneView">
            <Card border="white" style={{ width: '50%' }} className="memberCard">
              <Card.Body className="text-center">
                <img className="cardImg" src={teamMember3} alt="Team Member" />
                <h4>{t('about.name.0')}</h4>
                <p>{t('about.title.0')}</p>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item className="carouselCardPhoneView">
            <Card border="white" style={{ width: '50%' }} className="memberCard">
              <Card.Body className="text-center">
                <img className="cardImg" src={teamMember4} alt="Team Member" />
                <h4>{t('about.name.1')}</h4>
                <p>{t('about.title.1')}</p>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item className="carouselCardPhoneView">
            <Card border="white" style={{ width: '50%' }} className="memberCard">
              <Card.Body className="text-center">
                <img className="cardImg" src={teamMember5} alt="Team Member" />
                <h4>{t('about.name.2')}</h4>
                <p>{t('about.title.2')}</p>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </Container> */}
    </div>
  );
}
