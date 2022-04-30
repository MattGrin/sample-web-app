import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render app core', () => {
  render(<App />);
  const linkElement = screen.getByText("Sample web app content");
  expect(linkElement).toBeInTheDocument();
});
