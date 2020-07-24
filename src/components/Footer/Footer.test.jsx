import React from 'react';
import Footer from './Footer';
import renderer from 'react-test-renderer';

// it("Renders succesfully.", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<Footer />, div);
// });

// it("First column renders successfully.", () => {
//   const { getByTestId } = render(<Footer />);
//   expect(getByTestId("footerBlurbCol")).toBeInTheDocument();
// });

// it("Second column renders successfully.", () => {
//   const { getByTestId } = render(<Footer />);
//   expect(getByTestId("footerContactCol")).toBeInTheDocument();
// });

// it("Third column renders successfully.", () => {
//   const { getByTestId } = render(<Footer />);
//   expect(getByTestId("footerSocialCol")).toBeInTheDocument();
// });

it('Matches the snapshot.', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
