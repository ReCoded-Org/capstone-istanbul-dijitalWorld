import React from "react";
import "./Inspire.css";
import Button from "react-bootstrap/Button";

export default function Inspire(props) {
  return (
    <div className="inspireContainer" data-testid="inspireContainer">
      <h2 className="inspireHeader">
        <span className="purpleInspire">{props.header0}</span>{" "}
        <span className="pinkInspire">{props.header1}</span>
        <span className="purpleInspire">{props.header2}</span>{" "}
        <span className="pinkInspire">{props.header3}</span>
      </h2>
      <p className="heroText">
        {props.heroText} <br />
      </p>
      <Button className="inspireButton">{props.button}</Button>{" "}
    </div>
  );
}
