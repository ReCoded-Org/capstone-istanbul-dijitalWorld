import React from "react";
import { Col, Row, Container, Image } from "react-bootstrap";
import safeImage from "../../images/safe_image.jpeg";
import leonImage from "../../images/leon-biss.jpg";
import kidsImage from "../../images/small-kids.png";
import "./Quotes.css";

const Quotes = () => {
  return (
    <Container>
      <Row>
        <Col xl={6} lg={12} md={12} className="content-columns">
          <div className="content-container">
            <h2 id="say-her-name">
              <b>#SayHerName:</b>
              <br />
              My Intersectional Activism as a Black African Muslim Woman
              #BlackLivesMatter
              <br />
              <span>by Bashirat Oladele</span>
            </h2>
          </div>
          <div className="content-container">
            <Image src={leonImage} fluid />
          </div>
          <div className="content-container">
            <h2 id="fight-for-girls">
              The fight for girls
              <br />
              won&apos;t be won by
              <br />
              girls alone.
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
                An Open Letter
                <br />
                to My Abuser
              </u>
              <br />
              <span>Anonymous</span>
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
