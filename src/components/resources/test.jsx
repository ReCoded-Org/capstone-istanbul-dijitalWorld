import React, { Component } from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import './Resources.css';
import data from "./data.json";

export default function test() {
  const settings = {
    dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
    };

  return (
    <div>
      <h2>Vertical Mode with Swipe To Slide</h2>
      <Slider {...settings}>
        <div>
          <h3>{`url(${data[0].img})`}</h3>
        </div>
        <div>
          <h3>{`url(${data[1].img})`}</h3>
        </div>
        <div>
          <h3>{`url(${data[2].img})`}</h3>
        </div>
      </Slider>
    </div>
  );
}
