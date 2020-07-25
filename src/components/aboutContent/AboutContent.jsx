import React from 'react';
import './AboutContent.css';
// import { useTranslation } from 'react-i18next';
import { Col, Row, Container } from 'react-bootstrap';

const AboutContent = (props) => {
    // const { t } = useTranslation();
  return (
      <Container className="allContent">
        <Row>
          <Col>
          {/* <h2>{props.header.map(function (translate, index) { return {t('about.header')} })}</h2> */}

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
