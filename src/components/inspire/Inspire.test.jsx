import React from "react";
import ReactDOM from "react-dom";
import Inspire from "./Inspire";
import renderer from "react-test-renderer";

it("renders with no crash", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Inspire />, div);
});

it("renders correctly", () => {
  const tree = renderer.create(<Inspire />).toJSON();
  expect(tree).toMatchSnapshot();
});