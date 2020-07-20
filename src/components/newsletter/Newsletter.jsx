import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import "./Newsletter.css";

const Newsletter = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <Container>
        <Row data-testid="row1">
          <Col className="title">
            <p>{t("home.newsletter.titles.title1")}</p> <br />
            <p>{t("home.newsletter.titles.title2")}</p>
          </Col>
        </Row>

        <Row data-testid="row2">
          <Col className="box">
            <div className="test">
              <input className="input" placeholder="Your email address"></input>
              <button className="button">{t("home.newsletter.button")}</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Newsletter;
