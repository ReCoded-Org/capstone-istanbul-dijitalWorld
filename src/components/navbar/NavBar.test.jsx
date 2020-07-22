import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom";
import NavBar from "./NavBar";
import NavLinks from "./NavLinks";

it("Navbar renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NavBar />, div);
});

it("Nav links renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NavLinks />, div);
});
