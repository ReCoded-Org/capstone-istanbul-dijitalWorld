import React from 'react';
import './AboutContent.css';
import { Col, Row, Container } from 'react-bootstrap';

const AboutContent = () => {

  return (
      <Container className="allContent">
        <Row>
          <Col>
          {/* <p>{props.card.res.map(function (abi, index) { return "Source # " + index + " " })}</p> */}

            <h2>Our Story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </p>
          </Col>
        </Row>
      </Container>
  );
};

export default AboutContent;
