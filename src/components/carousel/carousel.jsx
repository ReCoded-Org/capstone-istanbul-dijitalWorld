import React, { useState } from "react";
import womenImg from "./womenright.png";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "react-bootstrap";
import "./carousel.css";
import ControlledCarousel from "./ControlledCarousel.jsx";

export default function carousel() {
  return (
    <div className="allContent">
      <div className="leftPart">
        <div className="sentence">
          <p>
            Digital
            <br /> Story telling <br />
            for <span>Impact</span>
          </p>
        </div>
        <button className="learnBtn">Learn More</button>
      </div>
      <div className="rightPart">
        {/* <ControlledCarousel /> */}

        <div className="calouselTrackContainer">
          <ul className="carousleTrack">
            <li className="carouselSlide slide1">
              <img
                className="carouselImg"
                src="https://static.wixstatic.com/media/72c0b2_36d01136c39a4c1f8eef128d4413bdc4~mv2.png/v1/fill/w_1000,h_571,al_c,usm_0.66_1.00_0.01/72c0b2_36d01136c39a4c1f8eef128d4413bdc4~mv2.png"
                alt="img1"
              />
              <li className="carouselSlide slide2">
                <img
                  className="carouselImg"
                  src="https://us.123rf.com/450wm/helgakhorimarko/helgakhorimarko1801/helgakhorimarko180100089/93833231-stock-vector-diverse-international-and-interracial-group-of-standing-women-we-are-stronger-together-text-for-girl.jpg?ver=6"
                  alt="img2"
                />
              </li>
            </li>
            <li className="carouselSlide slide3">
              <img className="carouselImg" src={womenImg} alt="img3" />
            </li>
          </ul>
        </div>

        <div className="carouselBtns">
          <button className="carouselBtn"> > </button>
          <button className="carouselBtn"> > </button>
        </div>
      </div>
      <div className="socialMediaIconsPart">
        <FontAwesomeIcon icon="facebook" />
        <FontAwesomeIcon icon="instagram" />
        <FontAwesomeIcon icon="twitter" />

        <img className="icon" src={facebook} width="1.25rem" alt="facebook" />
        <img className="icon" src={instagram} width="1.25rem" alt="instagram" />
        <img className="icon" src={twitter} width="1.25rem" alt="twitter" />
      </div>
    </div>
  );
}
