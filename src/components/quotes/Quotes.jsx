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
      <Row>
        <Col xl={6} lg={12} md={12} className="content-columns">
          <div className="content-container">
            <h2 id="say-her-name">
              <b>{t("home.quotes.openLetter.part1")}</b>
              <br />
              {t("home.quotes.sayHerName.part2")}
              <br />
              <span>{t("home.quotes.sayHerName.part3")}</span>
            </h2>
          </div>
          <div className="content-container">
            <Image src={leonImage} fluid />
          </div>
          <div className="content-container">
            <h2 id="fight-for-girls">
              {t("home.quotes.girlsFight.part1")}
              <br />
              {t("home.quotes.girlsFight.part2")}
              <br />
              {t("home.quotes.girlsFight.part3")}
            </h2>

            <button type="button">Donate Now</button>
          </div>
        </Col>
        <Col xl={6} lg={12} md={12} className="content-columns">
          <div className="content-container">
            <Image src={safeImage} fluid />
          </div>
          <div className="content-container">
            <h2 id="open-letter">
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
          <div className="content-container">
            <Image src={kidsImage} fluid />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Quotes;
