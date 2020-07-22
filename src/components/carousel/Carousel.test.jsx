import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom";
import Carousel from "./Carousel";

it("renders well", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Carousel />, div);
});
