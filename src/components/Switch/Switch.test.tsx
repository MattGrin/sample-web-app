import { render, screen } from "@testing-library/react";
import Switch from "./Switch";

describe("SoftHeader", () => {
  it("renders without crashing", () => {
    render(<Switch.Wrapper label="test">test</Switch.Wrapper>);
    const foundElement = screen.getByTestId("switch-wrapper");
    expect(foundElement).toBeInTheDocument();
  });
});
