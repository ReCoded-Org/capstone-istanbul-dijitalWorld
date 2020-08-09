import React from 'react';
import { useEffect } from 'react';
import blogArticles from '../blog-cards/blog.json';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default function SingleArticle() {
  let { url } = useRouteMatch();
  let { id } = useParams();

  return (
    <div>
      <Switch>
        <ScrollToTopOnMount />
        <Route path={`${url}/${id}`}>
          {blogArticles.map((blog) => {
            return (
              <div key={blog.id}>
                <h1>{blog.title}</h1>
                <p>{blog.body}</p>
              </div>
            );
          })}
        </Route>
      </Switch>
    </div>
  );
}
