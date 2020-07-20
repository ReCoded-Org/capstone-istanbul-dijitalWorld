import React from "react";
import ReactDOM from "react-dom";
import Inspire from "./Inspire";

it("renders with no crash", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Inspire />, div);
});
