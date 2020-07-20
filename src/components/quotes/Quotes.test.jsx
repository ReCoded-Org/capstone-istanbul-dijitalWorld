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

it("first row is present in the document", () => {
  const { getByTestId } = render(<Quotes />);
  expect(getByTestId("row1")).toBeInTheDocument();
});

it("second row is present in the document", () => {
  const { getByTestId } = render(<Quotes />);
  expect(getByTestId("row3")).toBeInTheDocument();
});

it("third row is present in the document", () => {
  const { getByTestId } = render(<Quotes />);
  expect(getByTestId("row3")).toBeInTheDocument();
});
