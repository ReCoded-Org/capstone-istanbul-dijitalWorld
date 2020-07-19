import React, { useState } from "react";
import womenImg from "./womenright.png";

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
        <img
          className="d-block w-100"
          src={womenImg}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.wixstatic.com/media/72c0b2_36d01136c39a4c1f8eef128d4413bdc4~mv2.png/v1/fill/w_1000,h_571,al_c,usm_0.66_1.00_0.01/72c0b2_36d01136c39a4c1f8eef128d4413bdc4~mv2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://us.123rf.com/450wm/helgakhorimarko/helgakhorimarko1801/helgakhorimarko180100089/93833231-stock-vector-diverse-international-and-interracial-group-of-standing-women-we-are-stronger-together-text-for-girl.jpg?ver=6"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
//   render(<ControlledCarousel />);
export default ControlledCarousel;
