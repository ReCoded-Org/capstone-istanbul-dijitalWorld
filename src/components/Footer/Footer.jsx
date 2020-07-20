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
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <Container>
        <Row className="row">
          <Col className="footerCol" md="4">
            <div className="divs"><p className="title-left">Get in Touch</p>
            <p className="text-left">
              But Brooke Chaffin and Catherine Connors are looking to change
              that with the introduction.
            </p>
            </div>
          </Col>

          <Col className="footerCol" md="4">
            <div className="divs">
            <p className="title-mid">Contact Us</p>
            <p className="text-mid">hello@gmail.com</p>
            <p className="text-mid">+9 876 543 21</p>
            </div>
          </Col>

          <Col className="footerCol" md="4">
            <p className="title-right">Follow Us</p>
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
