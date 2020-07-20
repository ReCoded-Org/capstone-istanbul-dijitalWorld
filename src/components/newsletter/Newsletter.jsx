import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="container">
      <Container>
        <Row>
          <Col className="title">
            <p>Never miss a story.</p> <br/>
            <p>Sign up for our newsletter.</p>
          </Col>
        </Row>
       
        <Row>
          <Col className="box">
            <div className="test">
            <input className="input" placeholder="Your email address"></input>
            <button className="button">Subssdscribe</button>
            </div>
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

