import classNames from 'classnames';
import React from 'react';

import './Layout.css';

interface SupportChildren extends Record<any, any> {
  children: React.ReactNode;
  className?: string;
}

const Content = ({ children, className }: SupportChildren) => {
  return <section className={classNames('layout__content', className)}>{children}</section>;
}

const Header = ({ children, className }: SupportChildren) => {
  return <header className={classNames('layout__header', className)}>{children}</header>;
}

const StickyFooter = ({ children, className }: SupportChildren) => {
  return <footer className={classNames('layout__sticky-footer', className)}>{children}</footer>;
}

const Layout = ({ children, className }: SupportChildren) => {
  return (
    <div className={classNames('layout', className)}>{children}</div>
  );
}

Layout.Content = Content;
Layout.Header = Header;
Layout.StickyFooter = StickyFooter;

export default Layout;