import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import womenPhoto from './womenPhoto.png';
import womenIllustration from './womenIllustration.png';

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
