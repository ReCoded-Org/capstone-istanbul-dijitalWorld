import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Newsletter from "./Newsletter";
import "@testing-library/jest-dom";

it("Renders succesfully.", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Newsletter />, div);
});

it("First row renders successfully.", () => {
  const { getByTestId } = render(<Newsletter />);
  expect(getByTestId("row1")).toBeInTheDocument();
});

it("Second row renders successfully.", () => {
  const { getByTestId } = render(<Newsletter />);
  expect(getByTestId("row2")).toBeInTheDocument();
});
