import React from "react";
import womenImg from "./womenright.png";
import "./carousel.css";

export default function carousel() {
  return (
    <div>
      <div className="leftPart">
        <div className="sentence">
          <p>
            Digital
            <br /> Story telling <br />
            for <span>Impact</span>
          </p>
        </div>
        <div className="learnBtn">
          <button className="learnBtn">Learn More</button>
        </div>
      </div>
      <div className="rightPart">
        <div className="calouselTrackContainer">
          <ul className="carousleTrack">
            <li className="carouselSlide">
              <img
                className="carouselImg"
                src="https://static.wixstatic.com/media/72c0b2_36d01136c39a4c1f8eef128d4413bdc4~mv2.png/v1/fill/w_1000,h_571,al_c,usm_0.66_1.00_0.01/72c0b2_36d01136c39a4c1f8eef128d4413bdc4~mv2.png"
                alt="img1"
              />
              <li className="carouselSlide">
                <img
                  className="carouselImg"
                  src="https://us.123rf.com/450wm/helgakhorimarko/helgakhorimarko1801/helgakhorimarko180100089/93833231-stock-vector-diverse-international-and-interracial-group-of-standing-women-we-are-stronger-together-text-for-girl.jpg?ver=6"
                  alt="img2"
                />
              </li>
            </li>
            <li className="carouselSlide">
              <img className="carouselImg" src={womenImg} alt="img3" />
            </li>
          </ul>
        </div>
        <div className="carouselBtns">
          <button className="carouselBtn"> v </button>
          <button className="carouselBtn"> v </button>
        </div>
      </div>
      <div className="socialMediaIcons"></div>
    </div>
  );
}
