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
    <footer className="footerContainer">
      <Container>
        <Row className="footerRow">
          <Col className="footerCol" md="4">
            <p className="footerBlurbTitle">
              {t("home.footer.getInTouch.title")}
            </p>
            <p className="footerBlurbText">
              {t("home.footer.getInTouch.text")}
            </p>
          </Col>

          <Col className="footerCol" md="3">
            <p className="footerContactTitle">
              {t("home.footer.contactUs.title")}
            </p>
            <p className="footerContactText">
              {t("home.footer.contactUs.emailAddress")}
              <br />
              {t("home.footer.contactUs.phoneNumber")}
            </p>
          </Col>

          <Col className="footerCol" md="2">
            <p className="footerSocialTitle">{t("home.footer.followUs")}</p>
            <FontAwesomeIcon className="footerIcons" icon={faTwitterSquare} />
            <FontAwesomeIcon className="footerIcons" icon={faFacebook} />
            <FontAwesomeIcon className="footerIcons" icon={faGithub} />
            <FontAwesomeIcon className="footerIcons" icon={faInstagramSquare} />
            <FontAwesomeIcon className="footerIcons" icon={faPinterest} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
