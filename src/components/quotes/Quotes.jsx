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
        <Col
          xl={6}
          lg={12}
          md={12}
          className="contentColumns"
          data-testid="column1"
        >
          <div className="contentContainer">
            <h2 id="sayHerName">
              <b>{t("home.quotes.sayHerName.part1")}</b>
              <br />
              {t("home.quotes.sayHerName.part2")}
              <br />
              <span>{t("home.quotes.sayHerName.part3")}</span>
            </h2>
          </div>
        </Col>
        <Col
          xl={6}
          lg={12}
          md={12}
          className="contentColumns"
          data-testid="column1"
        >
          <div className="contentContainer">
            <Image src={safeImage} fluid />
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          xl={6}
          lg={12}
          md={12}
          className="contentColumns"
          data-testid="column2"
        >
          <div className="contentContainer">
            <Image src={leonImage} fluid />
          </div>
        </Col>
        <Col
          xl={6}
          lg={12}
          md={12}
          className="contentColumns"
          data-testid="column2"
        >
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
      <Row>
        <Col
          xl={6}
          lg={12}
          md={12}
          className="contentColumns"
          data-testid="column2"
        >
          <div className="contentContainer">
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
          </div>
        </Col>
        <Col
          xl={6}
          lg={12}
          md={12}
          className="contentColumns"
          data-testid="column2"
        >
          <div className="contentContainer">
            <Image src={kidsImage} fluid />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Quotes;
