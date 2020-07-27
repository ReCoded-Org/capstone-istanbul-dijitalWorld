import React from 'react';
import Inspire from '../../components/inspire/Inspire';
import { useTranslation } from 'react-i18next';
import Quotes from '../../components/quotes/Quotes';
import Carousel from '../../components/carousel/Carousel';
import Newsletter from '../../components/newsletter/Newsletter';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Carousel />
      <Inspire
        header0={t('home.inspire.header.header0')}
        header1={t('home.inspire.header.header1')}
        header2={t('home.inspire.header.header2')}
        header3={t('home.inspire.header.header3')}
        heroText={t('home.inspire.heroText')}
        button={t('home.inspire.button')}
      />
      <Quotes />
      <Newsletter />
    </div>
  );
}
