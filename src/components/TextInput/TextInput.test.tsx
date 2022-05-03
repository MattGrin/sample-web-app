import { render, screen } from "@testing-library/react";
import TextInput from "./TextInput";

describe("TextInput", () => {
  it("renders without crashing", () => {
    render(<TextInput />);
    const foundElement = screen.getByTestId("primary-button");
    expect(foundElement).toBeInTheDocument();
  });
});
