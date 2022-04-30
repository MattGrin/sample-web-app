import React from 'react';
import Layout from './components/Layout/Layout';
import './App.css';

function App() {
  return (
    <div className="core-container">
      {/*
        * Every core-container child will float over the other child, 
        * Here you can add overlays like dialogs, popups, modals, etc.
        */}
      <Layout>
        <Layout.Header>Sample web app</Layout.Header>
        <Layout.Content>Sample web app content</Layout.Content>
        <Layout.StickyFooter>Sample web app footer</Layout.StickyFooter>
      </Layout>
    </div>
  );
}

export default App;
