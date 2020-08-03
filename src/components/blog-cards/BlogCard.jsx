import React from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import blogArticles from './blog.json'

export default function BlogCard() {
  const newBlogArticles = blogArticles.map((blog) => {
    return (
      <div>
        <Container key={blog.id}>
          <Row>
            <Col xs={6} md={6} lg={8}>
              <h3>{blog.title}</h3>
              <span>{blog.body.substring(0, 200)}</span>
            </Col>
            <Col xs={6} md={4} lg={3}>
              <Image src="holder.js/171x180" roundedCircle />
            </Col>
          </Row>
        </Container>
      </div>
    );
  });
}
