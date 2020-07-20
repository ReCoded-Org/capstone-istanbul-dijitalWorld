import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./carousel";

it("components are rendering well", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Carousel />, div);
});