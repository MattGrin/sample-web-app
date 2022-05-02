import { render, screen } from "@testing-library/react";
import ListWrapper from "./ListWrapper";

describe('ListWrapper', () => {
  it('should render', () => {
    render(<ListWrapper>children element</ListWrapper>);
    const childrenElement = screen.getByText("children element");
    expect(childrenElement).toBeInTheDocument();
  });
})