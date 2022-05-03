import { render, screen } from "@testing-library/react";
import PrimaryButton from "./PrimaryButton";

describe("PrimaryButton", () => {
  it("renders without crashing", () => {
    render(<PrimaryButton>name</PrimaryButton>);
    const foundElement = screen.getByText("name");
    expect(foundElement).toBeInTheDocument();
  });
});
