import React from "react";
import { Col, Row, Container, Image } from "react-bootstrap";
import safeImage from "../../images/safe_image.jpeg";
import leonImage from "../../images/leon-biss.jpg";
import kidsImage from "../../images/small-kids.png";

const Quotes = () => {
  return (
    <Container>
      <Row>
        <Col lg={6} md={6} s={12}>
          <div>
            <h2>Say Her Name</h2>
          </div>
          <div>
            <Image src={leonImage} fluid />
          </div>
          <div>
            <h2>
              The fight for girls
              <br />
              won&apos;t be won by girls alone
            </h2>
          </div>
        </Col>
        <Col lg={6} md={6} s={12}>
          <div>
            <Image src={safeImage} fluid />
          </div>
          <div>
            <h2>
              An Open Letter
              <br />
              to My Abuser
            </h2>
          </div>
          <div>
            <Image src={kidsImage} fluid />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Quotes;
