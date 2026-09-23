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

test("email is required", () => {
  render(
    <LoginForm onSubmit={() => {}}/>
  );

  const loginButton = screen.getByRole("button", {
    name: "Login"
  });
  
  fireEvent.click(loginButton);

  const error = screen.getByText("Email is required");

  expect(error).toBeInTheDocument();
});

test("password is required", () => {
  render(
    <LoginForm onSubmit={() => {}}/>
  );

  const loginButton = screen.getByRole("button", {
    name: "Login"
  });
  
  fireEvent.click(loginButton);

  const error = screen.getByText("Password is required");

  expect(error).toBeInTheDocument();
});


test("does not submit invalid form", () => {
  const onSubmit = jest.fn();

  render(
    <LoginForm
      onSubmit={onSubmit}
    />
  );

  const loginButton = screen.getByRole("button", {
    name: "Login"
  });

  fireEvent.click(loginButton);

  expect(onSubmit).not.toHaveBeenCalled();
});

test("cancel invalid email", () => {
  const onSubmit = jest.fn();

  render(
    <LoginForm
      onSubmit={onSubmit}
    />
  );

  const emailInput = screen.getByRole("textbox", {
    name: "Email"
  });

  const loginButton = screen.getByRole("button", {
    name: "Login"
  });

  fireEvent.click(loginButton);

  const error = screen.getByText("Email is required");

  expect(onSubmit).not.toHaveBeenCalled();
  expect(error).toBeInTheDocument();


  fireEvent.change(emailInput, {
    target: { value: "alex@gmail.com" }
  });

  const errorValid = screen.queryByText("Email is required");

  expect(errorValid).not.toBeInTheDocument();

});


test("cancel invalid password", () => {
  const onSubmit = jest.fn();

  render(
    <LoginForm
      onSubmit={onSubmit}
    />
  );

  const passwordInput = screen.getByLabelText("Password");

  const loginButton = screen.getByRole("button", {
    name: "Login"
  });

  fireEvent.click(loginButton);

  const error = screen.getByText("Password is required");

  expect(onSubmit).not.toHaveBeenCalled();
  expect(error).toBeInTheDocument();


  fireEvent.change(passwordInput, {
    target: { value: "123456" }
  });

  const errorValid = screen.queryByText("Password is required");

  expect(errorValid).not.toBeInTheDocument();

});


test("renders loading text when isLoading is true", () => {
  render (
    <LoginForm 
      onSubmit={() => {}}
      isLoading={true}
    />
  );

  const loginButton = screen.getByRole("button", {
    name: "Loading..."
  });

  expect(loginButton).toBeInTheDocument();
});

test("button is disabled when loading", () => {
  render (
    <LoginForm 
      onSubmit={() => {}}
      isLoading={true}
    />
  );
  
  const loginButton = screen.getByRole("button", {
    name: "Loading..."
  });

  expect(loginButton).toBeDisabled();
});


test("does not submit again when loading", () => {
  const onSubmit = jest.fn();

  const { container } = render(
  <LoginForm
    onSubmit={onSubmit}
    isLoading={true}
  />
  );

  const form = container.querySelector("form");

  fireEvent.submit(form!);

  expect(onSubmit).not.toHaveBeenCalled();
});

test("email input has no error description initially", () => {
  render(<LoginForm onSubmit={() => {}} />);

  const emailInput = screen.getByRole("textbox", {
    name: "Email"
  });

  expect(emailInput).not.toHaveAttribute("aria-describedby");
});


test("email input gets error description", () => {
  render (
    <LoginForm 
      onSubmit={() => {}}
    />
  );

  const emailInput = screen.getByRole("textbox", {
    name: "Email"
  });

  const loginButton = screen.getByRole("button", {
    name: "Login"
  });

  fireEvent.click(loginButton);

  expect(emailInput).toHaveAttribute(
    "aria-describedby",
    "email-error"
  );
});

test("password input has no error description initially", () => {
  render(<LoginForm onSubmit={() => {}} />);

  const passwordInput = screen.getByLabelText("Password");

  expect(passwordInput).not.toHaveAttribute("aria-describedby");
});

test("password input gets error description", () => {
  render (
    <LoginForm 
      onSubmit={() => {}}
    />
  );

  const passwordInput = screen.getByLabelText("Password");

  const loginButton = screen.getByRole("button", {
    name: "Login"
  });

  fireEvent.click(loginButton);

  expect(passwordInput).toHaveAttribute(
    "aria-describedby",
    "password-error"
  );
});
