import React from 'react';
import Inspire from '../../components/inspire/Inspire';
import Quotes from '../../components/quotes/Quotes';
import Carousel from '../../components/carousel/Carousel';

export default function Home() {
  return (
    <div>
      <Carousel />
      <Quotes />
      <Inspire />
    </div>
  );
}
