import React from 'react';
import { useEffect } from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './SingleArticle.css';

export default function SingleArticle() {
  let params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [allPosts, setAllPosts] = React.useState([]);

  const getAllPosts = async () => {
    const data = await fetch(
      'https://public-api.wordpress.com/wp/v2/sites/worldwithwomen30560421.wordpress.com/posts',
    );
    const posts = await data.json();
    setAllPosts(posts);
  };

  React.useEffect(() => {
    getAllPosts();
  }, []);

  return allPosts
    .filter(({ id }) => id === parseInt(params.id))
    .map((post) => {
      return (
        <Container className="articleContainer">
          <Row>
            <Col xs={6} md={6} lg={12}>
              <h1
                className="articleTitle"
                dangerouslySetInnerHTML={{
                  __html: post.title.rendered,
                }}
              ></h1>
            </Col>
          </Row>
          <Row className="textBodyHolder">
            <Image src={post.jetpack_featured_media_url} className="articleImage" />
            <span
              className="blogBody"
              dangerouslySetInnerHTML={{
                __html: post.content.rendered,
              }}
            ></span>
          </Row>
        </Container>
      );
    });
}
