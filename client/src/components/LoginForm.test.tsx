import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";

test("check on existence input", () => {
  render(<LoginForm 
      onSubmit={() => {}}
    />);

    const emailInput = screen.getByRole("textbox", {
      name: "Email"
    });

    const passwordInput = screen.getByLabelText("Password");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
});

test("submits email and password", () => {
  const onSubmit = jest.fn();

  render(
    <LoginForm
      onSubmit={onSubmit}
    />
  );


  const emailInput = screen.getByRole("textbox", {
    name: "Email"
  });
  const passwordInput = screen.getByLabelText("Password");
  fireEvent.change(emailInput, {
    target: { value: "alex@gmail.com" },
  });
  fireEvent.change(passwordInput, {
    target: { value: "123456"}
  });
  const loginButton = screen.getByRole("button", {
    name: "Login",
  });
  fireEvent.click(loginButton);
  expect(onSubmit).toHaveBeenCalledWith(
    "alex@gmail.com",
    "123456"
  );
});