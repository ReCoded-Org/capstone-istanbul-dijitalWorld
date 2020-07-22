import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Footer from "./Footer";
import "@testing-library/jest-dom";

it("Renders succesfully.", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Footer />, div);
});

it("First column renders successfully.", () => {
  const { getByTestId } = render(<Footer />);
  expect(getByTestId("col1")).toBeInTheDocument();
});

it("Second column renders successfully.", () => {
  const { getByTestId } = render(<Footer />);
  expect(getByTestId("col2")).toBeInTheDocument();
});

it("Third column renders successfully.", () => {
  const { getByTestId } = render(<Footer />);
  expect(getByTestId("col3")).toBeInTheDocument();
});
