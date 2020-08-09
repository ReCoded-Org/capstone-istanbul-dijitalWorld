import React from 'react';
import { useEffect } from 'react';
import blogArticles from '../blog-cards/blog.json';

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
          <div key={blog.id}>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </div>
  );
}
