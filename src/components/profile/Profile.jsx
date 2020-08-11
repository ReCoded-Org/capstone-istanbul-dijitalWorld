import React from 'react';
import './Profile.css';
import { Container, Col, Row, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import deleteThis from '../../images/stupidGuy.png';

export default function Profile() {
  const { t } = useTranslation();

  return (
    <Container>
      <Col md="12">
        <Row className="profileImageRow">
          <Image src={deleteThis} alt="profileImage" roundedCircle />
        </Row>
        <div className="profileDetailRow">
          <Row>
            <Col>
              <h5>{t('profile.fullName')}</h5>
            </Col>
            <Col> name surname</Col>
          </Row>
          <Row>
            <Col>
              {' '}
              <h5>{t('profile.email')}</h5>
            </Col>
            <Col> email@gmail.com</Col>
          </Row>
          <Row>
            <Col>
              {' '}
              <h5>{t('profile.birthday')}</h5>
            </Col>
            <Col>31-13-1901</Col>
          </Row>
          <Row>
            <Col>
              {' '}
              <h5>{t('profile.phone')}</h5>
            </Col>
            <Col>+811234567 </Col>
          </Row>
        </div>
      </Col>
    </Container>
  );
}
