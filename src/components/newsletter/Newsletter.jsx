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
          <Col className="subscribe">
              <input className="input" placeholder={t("home.newsletter.input.text")}></input>
              <button className="button">{t("home.newsletter.input.button")}</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Newsletter;
