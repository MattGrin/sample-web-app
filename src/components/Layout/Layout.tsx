import React from 'react';
import './Layout.css';

interface SupportChildren extends Record<any, any> {
  children: React.ReactNode;
}

const Content = ({ children }: SupportChildren) => {
  return <section className='layout__content'>{children}</section>;
}

const Header = ({ children }: SupportChildren) => {
  return <header className='layout__header'>{children}</header>;
}

const StickyFooter = ({ children }: SupportChildren) => {
  return <footer className='layout__sticky-footer'>{children}</footer>;
}

const Layout = ({ children }: SupportChildren) => {
  return (
    <div className='layout'>{children}</div>
  );
}

Layout.Content = Content;
Layout.Header = Header;
Layout.StickyFooter = StickyFooter;

export default Layout;