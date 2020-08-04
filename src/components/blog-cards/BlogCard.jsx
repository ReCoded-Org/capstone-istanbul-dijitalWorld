import React from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import blogArticles from './blog.json';
import './BlogCard.css';

export default function BlogCard() {
  function handleClick() {
    // history.push('/`${blog.id}`');
  }

  return blogArticles.map((blog) => {
    return (
      <Container key={blog.id} className="blogContainer">
        <Row>
          <Col xs={6} md={6} lg={8}>
            <h3 className="blogTitle">{blog.title}</h3>
            <span className="blogBody">{blog.body.substring(0, 250)}...</span>
            <button onClick={handleClick} className="readMoreButton">
              Read More
            </button>
          </Col>
          <Col xs={4} md={4} lg={3} className="imageContainer">
            <Image src={blog.imgUrl} className="roundImage" roundedCircle />
          </Col>
        </Row>
      </Container>
    );
  });
}
