import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Quotes from "./Quotes";

import "@testing-library/jest-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Quotes />, div);
});

it("button renders correctly", () => {
  const { getByTestId } = render(<Quotes />);
  expect(getByTestId("button")).toHaveAttribute("type", "button");
});

it("column 1 have correct class name", () => {
  const { getByTestId } = render(<Quotes />);
  expect(getByTestId("column-1")).toHaveClass("content-columns");
});

it("column 2 have correct class name", () => {
  const { getByTestId } = render(<Quotes />);
  expect(getByTestId("column-2")).toHaveClass("content-columns");
});
