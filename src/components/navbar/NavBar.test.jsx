import "@testing-library/jest-dom";

const navbar = getByTestId("navbar-collapse");

expect(navbar).toHaveId("basic-navbar-nav");

expect(
  queryByTestId(document.documentElement, "brand-logo")
).toBeInTheDocument();
expect(getByTestId("visibility-visible")).toBeVisible();
