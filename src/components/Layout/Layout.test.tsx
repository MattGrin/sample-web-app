import { render, screen } from '@testing-library/react';
import Layout from "./Layout";

describe('Layout', () => {
  const NESTED_ELEMENT = 'nested element'
  const NESTED_HEADER = 'nested header value'
  const NESTED_CONTENT = 'nested content value'
  const NESTED_FOOTER = 'nested footer value'

  it('should render root', () => {
    render(<Layout>{NESTED_ELEMENT}</Layout>);
    const nestedElement = screen.getByText(NESTED_ELEMENT);
    expect(nestedElement).toBeInTheDocument();
  });
  it('should render header', () => {
    render(<Layout>{NESTED_ELEMENT}</Layout>);
    const nestedElement = screen.getByText(NESTED_ELEMENT);
    expect(nestedElement).toBeInTheDocument();
  });
  it('should render content', () => {
    render(<Layout.Content>{NESTED_ELEMENT}</Layout.Content>);
    const nestedElement = screen.getByText(NESTED_ELEMENT);
    expect(nestedElement).toBeInTheDocument();
  });
  it('should render footer', () => {
    render(<Layout.StickyFooter>{NESTED_ELEMENT}</Layout.StickyFooter>);
    const nestedElement = screen.getByText(NESTED_ELEMENT);
    expect(nestedElement).toBeInTheDocument();
  });

  it('should render all elements', () => {
    render(<Layout>
      <Layout.Header>{NESTED_HEADER}</Layout.Header>
      <Layout.Content>{NESTED_CONTENT}</Layout.Content>
      <Layout.StickyFooter>{NESTED_FOOTER}</Layout.StickyFooter>
    </Layout>);
    const nestedHeader = screen.getByText(NESTED_HEADER);
    const nestedContent = screen.getByText(NESTED_CONTENT);
    const nestedFooter = screen.getByText(NESTED_FOOTER);
    expect(nestedHeader).toBeInTheDocument();
    expect(nestedContent).toBeInTheDocument();
    expect(nestedFooter).toBeInTheDocument();
  });
});