import { render, screen } from "@testing-library/react";
import SoftHeader from "./SoftHeader";

describe("SoftHeader", () => {
  it("renders without crashing", () => {
    render(<SoftHeader />);
    const foundElement = screen.getByTestId('soft-header');
    expect(foundElement).toBeInTheDocument();
  });
});

