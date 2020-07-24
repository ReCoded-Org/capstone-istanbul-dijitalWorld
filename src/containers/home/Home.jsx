import React from 'react';
import Newsletter from '../../components/newsletter/Newsletter';
import Quotes from '../../components/quotes/Quotes';

function Home() {
  return (
    <div className="home">
      <Quotes />
      <Newsletter />
    </div>
  );
}

export default Home;
