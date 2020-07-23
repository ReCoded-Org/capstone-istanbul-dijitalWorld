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
  expect(getByTestId("footerBlurbCol")).toBeInTheDocument();
});

it("Second column renders successfully.", () => {
  const { getByTestId } = render(<Footer />);
  expect(getByTestId("footerContactCol")).toBeInTheDocument();
});

it("Third column renders successfully.", () => {
  const { getByTestId } = render(<Footer />);
  expect(getByTestId("footerSocialCol")).toBeInTheDocument();
});