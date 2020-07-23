import React from "react";
import ReactDOM from "react-dom";
import Inspire from "./Inspire";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

it("renders with no crash", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Inspire />, div);
});
it("matches snapshot", () => {
  const { getByTestId } = render(<Inspire />);
  expect(getByTestId("inspireContainer")).toBeInTheDocument();
});
