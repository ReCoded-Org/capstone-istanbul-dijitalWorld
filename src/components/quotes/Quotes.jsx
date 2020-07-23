import React from "react";
import { Col, Row, Container, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import safeImage from "../../images/safe_image.jpeg";
import leonImage from "../../images/leon-biss.jpg";
import kidsImage from "../../images/small-kids.png";
import "./Quotes.css";

const Quotes = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Row data-testid="sayHerNameRow">
        <Col xl={6} lg={12} md={12} className="contentColumns">
          <h2 className="sayHerName">
            <b>{t("home.quotes.sayHerName.0")}</b>
            <br />
            {t("home.quotes.sayHerName.1")}
            <br />
            <span>{t("home.quotes.sayHerName.2")}</span>
          </h2>
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
            <h2 className="openLetter">
              <u>
                {" "}
                {t("home.quotes.openLetter.0")}
                <br />
                {t("home.quotes.openLetter.1")}
              </u>
              <br />
              <span>{t("home.quotes.openLetter.2")}</span>
            </h2>
          </div>
        </Col>
      </Row>
      <Row data-testid="fightForGirlsRow">
        <Col xl={6} lg={12} md={12} className="contentColumns">
          <h2 className="fightForGirls">
            {t("home.quotes.girlsFight.0")}
            <br />
            {t("home.quotes.girlsFight.1")}
            <br />
            {t("home.quotes.girlsFight.2")}
          </h2>
          <button type="button" className="donateButton" data-testid="button">
            Donate Now
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
