import React from 'react';
import renderer from 'react-test-renderer';
import Newsletter from './Newsletter';
//import "@testing-library/jest-dom";

// it("Renders succesfully.", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<Newsletter />, div);
// });

// it("First row renders successfully.", () => {
//   const { getByTestId } = render(<Newsletter />);
//   expect(getByTestId("newsletterTitle")).toBeInTheDocument();
// });

// it("Second row renders successfully.", () => {
//   const { getByTestId } = render(<Newsletter />);
//   expect(getByTestId("newsletterInput")).toBeInTheDocument();
// });

it('Renders succesfully.', () => {
  const tree = renderer.create(<Newsletter />).toJSON();
  expect(tree).toMatchSnapshot();
});
