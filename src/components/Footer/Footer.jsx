import React from "react";
import {
  faTwitterSquare,
  faFacebook,
  faGithub,
  faInstagramSquare,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer-container">
      <Container>
        <Row className="row">
          <Col className="footerCol" md="5" data-testid="col1">
            <div className="divs">
              <p className="title-left">{t("home.footer.getInTouch.title")}</p>
              <p className="text-left">{t("home.footer.getInTouch.text")}</p>
            </div>
          </Col>

          <Col className="footerCol" md="2" data-testid="col2">
            <div className="divs">
              <p className="title-mid">{t("home.footer.contactUs.title")}</p>
              <p className="text-mid">{t("home.footer.contactUs.emailAddress")}</p>
              <p className="text-mid">{t("home.footer.contactUs.phoneNumber")}</p>
            </div>
          </Col>

          <Col className="footerCol" md="2" data-testid="col3">
            <p className="title-right">{t("home.footer.followUs")}</p>
            <FontAwesomeIcon className="icon" icon={faTwitterSquare} />
            <FontAwesomeIcon className="icon" icon={faFacebook} />
            <FontAwesomeIcon className="icon" icon={faGithub} />
            <FontAwesomeIcon className="icon" icon={faInstagramSquare} />
            <FontAwesomeIcon className="icon" icon={faPinterest} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
