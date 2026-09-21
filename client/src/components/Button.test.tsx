import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders button text", () => {
  render(<Button>Sign in</Button>);

  const button = screen.getByRole("button", {
    name: "Sign in",
  });

  expect(button).toBeInTheDocument();
});

test("renders button disable", () => {
  render(<Button disabled>Sign in</Button>);

  const button = screen.getByRole("button", {
    name: "Sign in",
  });

  expect(button).toBeDisabled();
});