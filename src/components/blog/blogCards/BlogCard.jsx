import React from 'react';
import SingleBlogCard from './SingleBlogCard';
import './BlogCard.css';

export default function BlogCard() {
  const [allPosts, setAllPosts] = React.useState([]);
  const dataUrl =
    'https://public-api.wordpress.com/wp/v2/sites/worldwithwomen30560421.wordpress.com/posts';

  const getAllPosts = async () => {
    const data = await fetch(dataUrl);
    const posts = await data.json();
    setAllPosts(posts);
  };

  React.useEffect(() => {
    getAllPosts();
  }, []);

  return allPosts.map((post, index) => <SingleBlogCard post={post} />);
}
