import { render, screen } from "@testing-library/react";
import Filters from "./Filters";

describe("Filters", () => {
  it("renders without crashing", () => {
    render(<Filters />);
    const foundElement = screen.getByTestId('filters');
    expect(foundElement).toBeInTheDocument();
  });
});

