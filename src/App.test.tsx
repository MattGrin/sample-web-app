import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('render app core', () => {
  it('should have header text', () => {
    render(<App />);
    const headerElement = screen.getByText("Sample web app");
    const contentElement = screen.getByText("Sample web app content");
    expect(headerElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  })
});
