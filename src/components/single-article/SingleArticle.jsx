import React from 'react';
import { useEffect } from 'react';
import blogArticles from '../blog-cards/blog.json';
import { Col, Row, Container, Image } from 'react-bootstrap';
import './SingleArticle.css';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default function SingleArticle() {
  return (
    <div>
      <ScrollToTopOnMount />
      {blogArticles.map((blog) => {
        return (
          <Container key={blog.id} className="articleContainer">
            <Row>
              <Col xs={6} md={6} lg={8}>
                <h1 className="articleTitle">{blog.title}</h1>
                <span>By {blog.author}</span>
              </Col>
              <Col xs={4} md={4} lg={3}>
                <Image src={blog.imgUrl} className="articleImage" />
              </Col>
            </Row>
            <Row>
              <span className="articleBody">{blog.body}</span>
            </Row>
          </Container>
        );
      })}
    </div>
  );
}
