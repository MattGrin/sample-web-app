import { render, screen } from "@testing-library/react";
import Switch from "./Switch";

describe("Switch", () => {
  it("renders wrapper without crashing", () => {
    render(<Switch.Wrapper label="test">test children</Switch.Wrapper>);
    const foundElement = screen.getByText("test children");
    expect(foundElement).toBeInTheDocument();
  });

  it("renders item without crashing", () => {
    render(
      <Switch.Item isActive={false} onClick={() => {}} aria-label="test">
        value
      </Switch.Item>
    );
    const foundElement = screen.getByText("value");
    expect(foundElement).toBeInTheDocument();
  });
});
