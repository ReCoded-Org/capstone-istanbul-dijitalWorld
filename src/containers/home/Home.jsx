import React from 'react';
import Inspire from '../../components/inspire/Inspire';
import Quotes from '../../components/quotes/Quotes';
import Carousel from '../../components/carousel/Carousel';
import Newsletter from '../../components/newsletter/Newsletter';

export default function Home() {
  return (
    <div>
      <Carousel />
      <Quotes />
      <Inspire />
      <Newsletter />
    </div>
  );
}
