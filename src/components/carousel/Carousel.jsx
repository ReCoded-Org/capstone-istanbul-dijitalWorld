import React from 'react';
import facebook from './facebook.svg';
import instagram from './instagram.svg';
import twitter from './twitter.svg';
import './carousel.css';
import ControlledCarousel from './ControlledCarousel';

export default function Carousel(props) {
  return (
    <div className="allContent">
      <div className="sentenceAndButton">
        <div className="sentence">
          <p>
            {props.header0}
            <br /> {props.header1} <br />
            {props.header2} <span>{props.header3}</span>
          </p>
        </div>
        <button type="button" className="learnBtn">
          {props.button}
        </button>
      </div>
      <div className="carouselImgs">
        <ControlledCarousel />
      </div>
      <div className="socialMediaIcons">
        <img className="icon" src={facebook} alt="facebook" />
        <img className="icon" src={instagram} alt="instagram" />
        <img className="icon" src={twitter} alt="twitter" />
      </div>
    </div>
  );
}
