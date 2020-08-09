import React from 'react';
import { useEffect } from 'react';
import blogArticles from '../blog-cards/blog.json';
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
          <div key={blog.id} className="articleContainer">
            <img src={blog.imgUrl} className="articleImage" />
            <h1 className="articleTitle">{blog.title}</h1>
            <span className="articleBody">{blog.body}</span>
          </div>
        );
      })}
    </div>
  );
}
