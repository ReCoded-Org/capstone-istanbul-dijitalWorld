import React from 'react';
import womenPhoto from './womenPhoto.png';
import womenIllustration from './womenIllustration.png';
import './carousel.css';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={womenPhoto} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={womenIllustration} alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
