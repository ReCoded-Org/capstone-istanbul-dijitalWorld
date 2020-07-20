import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap"
import "./Newsletter.css"

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <Container fluid="true" >
        <Row className="newsletter-title" float="center">
          <Col className="title">
            <p>Never miss a story. Sign up for our newsletter.</p>
          </Col>
        </Row>
       
        <Row className="newsletter-box">
          <Col className="box">
            <input placeholder="Your email address"></input>
            <button>Subscribe</button>

          </Col>
        </Row>
      </Container>
      {/* <Card>
        <Card.Body>
          <Card.Title className="title">Never miss a story. Sign up for our newsletter.</Card.Title>
          <input placeholder="Your email address"></input>
          <button>Subscribe</button>
        </Card.Body>
      </Card> */}
    </div>
  );
}

export default Newsletter;

