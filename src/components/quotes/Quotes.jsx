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
          <h2 id="sayHerName">
            <b>{t("home.quotes.sayHerName.part1")}</b>
            <br />
            {t("home.quotes.sayHerName.part2")}
            <br />
            <span>{t("home.quotes.sayHerName.part3")}</span>
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
            <h2 id="openLetter">
              <u>
                {" "}
                {t("home.quotes.openLetter.part1")}
                <br />
                {t("home.quotes.openLetter.part2")}
              </u>
              <br />
              <span>{t("home.quotes.openLetter.part3")}</span>
            </h2>
          </div>
        </Col>
      </Row>
      <Row data-testid="fightForGirlsRow">
        <Col xl={6} lg={12} md={12} className="contentColumns">
          <h2 id="fightForGirls">
            {t("home.quotes.girlsFight.part1")}
            <br />
            {t("home.quotes.girlsFight.part2")}
            <br />
            {t("home.quotes.girlsFight.part3")}
          </h2>
          <button type="button" data-testid="button">
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
