import React from 'react';
import { fab, faTwitterSquare, faFacebook, faGithub, faInstagramSquare, faPinterest} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <footer className="footer-container">
      <Container fluid="true">
        <Row>
          <Col className="col-1" md="4">
            <p className="title-left">Get in Touch</p>
            <p className="text-left">But Brooke Chaffin and Catherine Connors are looking to change that with the introduction.</p>
          </Col>
          <Col className="col-2" md="4">
            <p className="title-mid">Contact Us</p>
            <p className="text-mid">hello@gmail.com</p>
            <p className="text-mid">+9 876 543 21</p>
          </Col>
          <Col className="col-3" md="4">
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
  )
}

export default Footer;