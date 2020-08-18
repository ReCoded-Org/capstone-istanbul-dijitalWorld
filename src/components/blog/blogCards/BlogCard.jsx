import React from 'react';
import SingleBlogCard from './SingleBlogCard';
import i18next from "i18next"
import './BlogCard.css';

export default function BlogCard() {
  const [currentLang, setCurrentLang] = React.useState(i18next.language);
  console.log(currentLang)
  const [allPosts, setAllPosts] = React.useState([]);
  const dataUrl =
    'https://public-api.wordpress.com/wp/v2/sites/worldwithwomen30560421.wordpress.com/posts';



  React.useEffect(() => {
    const getAllPosts = async () => {
      const data = await fetch(dataUrl);
      const posts = await data.json();
      const numberOfLanguages = i18next.languages.length;
      const FIRST_ELEMENT = 0;
      const postsDividedLanguages = posts.length / numberOfLanguages;
      const startingIndexOfEnglish = postsDividedLanguages * 2;
      let filteredPosts = []

      switch (currentLang) {
        case "tr": filteredPosts = posts.slice(FIRST_ELEMENT, postsDividedLanguages)
          break;
        case "en": filteredPosts = posts.slice(startingIndexOfEnglish)
          break;
        case "an": filteredPosts = posts.slice(postsDividedLanguages, startingIndexOfEnglish)
          break;
        default: filteredPosts = posts.slice(startingIndexOfEnglish)
          break;
      }

      setAllPosts(filteredPosts);
    };

    getAllPosts();
  }, [currentLang]);

  i18next.on('languageChanged', (lng) => {
    setCurrentLang(lng);
  })



  return allPosts.map((post, index) => <SingleBlogCard post={post} />);
}
