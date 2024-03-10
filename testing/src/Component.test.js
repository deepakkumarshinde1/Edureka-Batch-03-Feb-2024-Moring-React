import { fireEvent, render, screen } from "@testing-library/react";

import Component from "./Component";
let propValue = "edureka";
test("Check for props content", async () => {
  render(<Component text={propValue} />);
  let element = await screen.findByTestId("test-prop");
  expect(element.innerHTML).toBe(propValue.toUpperCase());
});

test("Check for button click", () => {
  let incCount = jest.fn();
  render(<Component text={propValue} />);
  let button = screen.getByRole("button");
  fireEvent.click(button);
  expect(incCount).toHaveBeenCalledTimes(1);
});
