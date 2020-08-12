import React from 'react';
import { useEffect } from 'react';
import blogArticles from '../blog-cards/blog.json';
import { Col, Row, Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './SingleArticle.css';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default function SingleArticle({ match }) {
  let params = useParams();
  console.log(params.id);
  
  return (
    <div>
      <ScrollToTopOnMount />
      {blogArticles.filter(({id}) => id === parseInt(params.id)).map((blog) => {
        return (
          <Container key={blog.id} className="articleContainer">
            <Row>
              <Col xs={6} md={6} lg={8}>
                <h1 className="articleTitle">{blog.title}</h1>
                <span>By {blog.author}</span>
              </Col>
            </Row>
            <Row>
              <span className="articleBody">{blog.firstPart}</span>
              <Image src={blog.imgUrl} className="articleImage" />
              <span className="articleBody">{blog.secondPart}</span>
              <span className="articleBody">{blog.thirdPart}</span>
            </Row>
          </Container>
        );
      })}
    </div>
  );
}
