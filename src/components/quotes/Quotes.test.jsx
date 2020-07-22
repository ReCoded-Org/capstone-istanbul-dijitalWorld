import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Quotes from "./Quotes";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Quotes />, div);
});

it("donate button renders correctly", () => {
  const { getByTestId } = render(<Quotes />);
  expect(getByTestId("button")).toHaveAttribute("type", "button");
});

it("say her name row is present in the document", () => {
  const { getByTestId } = render(<Quotes />);
  expect(getByTestId("sayHerNameRow")).toBeInTheDocument();
});

it("an open letter row is present in the document", () => {
  const { getByTestId } = render(<Quotes />);
  expect(getByTestId("anOpenLetterRow")).toBeInTheDocument();
});

it("fight for girls row is present in the document", () => {
  const { getByTestId } = render(<Quotes />);
  expect(getByTestId("fightForGirlsRow")).toBeInTheDocument();
});
