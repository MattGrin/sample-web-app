import { render, screen } from "@testing-library/react";
import PrimaryButton from "./PrimaryButton";

describe("PrimaryButton", () => {
  it("renders without crashing", () => {
    render(<PrimaryButton />);
    const foundElement = screen.getByTestId("soft-header");
    expect(foundElement).toBeInTheDocument();
  });
});
