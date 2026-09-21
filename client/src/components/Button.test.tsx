import { render, screen, fireEvent} from "@testing-library/react";
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

test("calls onClick when button is clicked", () => {

  const handleClick = jest.fn()

  render(<Button onClick={handleClick}>Sign in</Button>)

  const button = screen.getByRole("button", {
    name: "Sign in",
  });
  fireEvent.click(button)

  expect(handleClick).toHaveBeenCalledTimes(1);
})