import React from 'react';
import './carousel.css';
import ControlledCarousel from './ControlledCarousel';
import { useTranslation } from 'react-i18next';
import {
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Carousel() {
  const { t } = useTranslation();
  return (
    <div className="allContentHomeCarousel">
      <div className="sentenceAndButton">
        <div className="sentence">
          <h1>
            {t('home.carousel.header.header0')}
            <br /> {t('home.carousel.header.header1')} <br />
            {t('home.carousel.header.header2')} <span>{t('home.carousel.header.header3')}</span>
          </h1>
        </div>
        <button type="button" className="learnBtn">
          {t('home.carousel.button')}
        </button>
      </div>
      <div className="carouselImgs">
        <ControlledCarousel />
      </div>
      <div className="socialMediaIcons">
        <FontAwesomeIcon className="homeIcon" icon={faTwitterSquare} />
        <FontAwesomeIcon className="homeIcon" icon={faFacebookSquare} />
        <FontAwesomeIcon className="homeIcon" icon={faInstagramSquare} />
      </div>
    </div>
  );
}
