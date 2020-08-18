import React from 'react';
import {
  faTwitter,
  faFacebook,
  faGithub,
  faInstagram,
  faPinterest,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footerContainer">
      <Container>
        <Row className="footerRow">
          <Col className="footerCol" md="5">
            <p className="footerTitle">{t('home.footer.getInTouch.title')}</p>
            <p className="footerBlurbText">{t('home.footer.getInTouch.text')}</p>
          </Col>

          <Col className="footerCol" md="3">
            <p className="footerTitle">{t('home.footer.contactUs.title')}</p>
            <p className="footerContactText">
              {t('home.footer.contactUs.emailAddress')}
              <br />
              {t('home.footer.contactUs.phoneNumber')}
            </p>
          </Col>

          <Col className="footerCol" md="3">
            <p className="footerTitle">{t('home.footer.followUs')}</p>
            <FontAwesomeIcon className="footerIcons" icon={faTwitter} />
            <FontAwesomeIcon className="footerIcons" icon={faFacebook} />
            <FontAwesomeIcon className="footerIcons" icon={faGithub} />
            <br />
            <FontAwesomeIcon className="footerIcons" icon={faInstagram} />
            <FontAwesomeIcon className="footerIcons" icon={faPinterest} />
            <FontAwesomeIcon className="footerIcons" icon={faYoutube} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
