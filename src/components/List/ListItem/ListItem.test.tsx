import { render, screen } from '@testing-library/react';
import ListItem from "./ListItem";

describe('ListItem', () => {
  it("renders without crashing", () => {
    render(<ListItem 
      title="Buzz"
      subtitle="A Real Bitter Experience."
      leadingSpec="4.5%"
      trailingSpec="samjbmason"
      imgUrl='img_url'
    />);
    const nameElement = screen.getByText("Buzz");
    const avbElement = screen.getByText("4.5%");
    const taglineElement = screen.getByText("A Real Bitter Experience.");
    const contributor = screen.getByText("samjbmason");
    expect(nameElement).toBeInTheDocument();
    expect(avbElement).toBeInTheDocument();
    expect(taglineElement).toBeInTheDocument();
    expect(contributor).toBeInTheDocument();
  });
});