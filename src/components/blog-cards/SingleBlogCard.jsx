import React from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './BlogCard.css';

export default function SingleBlogCard(props) {
  return (
    <div className="containerToAllCards">
      <Container className="blogContainer">
        <Row>
          <Col xs={6} md={6} lg={8}>
            <h3
              className="blogTitle"
              dangerouslySetInnerHTML={{
                __html: props.post.title.rendered,
              }}
            >
            </h3>
            <span
              className="blogBody"
              dangerouslySetInnerHTML={{
                __html: props.post.excerpt.rendered,
              }}
            ></span>
            <NavLink to={`/blog/${props.post.id}`}>
              <button type="button" className="readMoreButton">
                Read More
              </button>
            </NavLink>
          </Col>
          <Col xs={4} md={4} lg={3} className="imageContainer">
            <Image
              src={props.post.jetpack_featured_media_url}
              className="roundImage"
              roundedCircle
            />
          </Col>
        </Row>
      </Container>
      <hr />
    </div>
  );
}
