import React from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './BlogCard.css';
import { useTranslation } from 'react-i18next';

export default function SingleBlogCard(props) {
  const { t } = useTranslation();
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
            ></h3>
            <span
              className="blogBody"
              dangerouslySetInnerHTML={{
                __html: props.post.excerpt.rendered,
              }}
            ></span>
            <NavLink to={`/blog/${props.post.id}`}>
              <button type="button" className="readMoreButton">
                {t('blog.readMore')}
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
