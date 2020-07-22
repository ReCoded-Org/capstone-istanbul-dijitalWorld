import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom";
import NavBar from "./NavBar";
import NavLinks from "./NavLinks";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NavBar />, div);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NavLinks />, div);
});
