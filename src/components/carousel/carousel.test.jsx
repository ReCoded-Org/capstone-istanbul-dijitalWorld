import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./Carousel";

it("components are rendering well", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Carousel />, div);
});
