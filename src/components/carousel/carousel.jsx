import React from "react";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import "./carousel.css";
import ControlledCarousel from "./ControlledCarousel.jsx";

export default function carousel(props) {
  return (
    <div className="allContent">
      <div className="leftPart">
        <div className="sentence">
          <p>
            {props.header1}
            <br /> {props.header2} <br />
            {props.header3} <span>{props.header4}</span>
          </p>
        </div>
        <button className="learnBtn">{props.button}</button>
      </div>
      <div className="midPart">
        <ControlledCarousel />
      </div>
      <div className="socialMediaIconsPart">
        <img className="icon" src={facebook} width="20px" alt="facebook" />
        <img className="icon" src={instagram} width="20px" alt="instagram" />
        <img className="icon" src={twitter} width="20px" alt="twitter" />
      </div>
    </div>
  );
}
