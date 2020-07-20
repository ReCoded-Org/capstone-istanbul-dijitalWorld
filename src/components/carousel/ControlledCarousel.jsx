import React, { useState } from "react";
import womenImg from "./womenright.png";
import women from "./women.png";
import "./carousel.css";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={womenImg} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={women} alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
}
export default ControlledCarousel;
