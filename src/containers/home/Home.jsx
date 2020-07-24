import React from 'react';
import Newsletter from '../components/newsletter';
import Quotes from '../../components/quotes/Quotes';
import '../components/newsletter.css';

function Home() {
  return (
    <div className="home">
      <Quotes />
      <Newsletter />
    </div>
  );
}

export default Home;