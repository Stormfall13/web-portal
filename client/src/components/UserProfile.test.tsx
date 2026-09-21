import { render, screen, fireEvent } from "@testing-library/react";
import UserProfile from "./UserProfile";

test("renders user name", () => {
  render(
    <UserProfile
      name="Alex"
      onLogout={() => {}}
    />);

  const heading = screen.getByRole("heading", {
    name: "Alex"
  });

  expect(heading).toBeInTheDocument();
});

test("calls onLogout when logout button is clicked", () => {
  const onLogout = jest.fn()

  render(
    <UserProfile
      name="Alex"
      onLogout={onLogout}
    />
  )

  const buttonOnLogout = screen.getByRole("button", {
    name: "Logout"
  })

  fireEvent.click(buttonOnLogout);

  expect(onLogout).toHaveBeenCalledTimes(1);
})