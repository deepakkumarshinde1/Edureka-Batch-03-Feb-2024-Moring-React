import { render, screen } from "@testing-library/react";
import App from "./App";

test("check for edureka text", () => {
  render(<App />);
  // query
  let element = screen.getByText("Edureka");
  // assert
  expect(element).toBeInTheDocument();
});

test("check for h1 element", () => {
  render(<App />);

  let element = screen.getByText("Edureka");
  // assert
  expect(element.nodeName.toLowerCase()).toBe("h1");
});
