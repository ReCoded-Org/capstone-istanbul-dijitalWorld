import React from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';

export default function BlogCard() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6} md={6} lg={8}></Col>
          <Col xs={6} md={4} lg={3}>
            <Image src="holder.js/171x180" roundedCircle />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
