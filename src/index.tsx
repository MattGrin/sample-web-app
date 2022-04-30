import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * Get the DOM element to mount your react app.
 */
const rootTarget = document.getElementById('root') as HTMLElement;

/**
 * Feed react DOM with your assigned root target
 */
const rootElement = ReactDOM.createRoot(rootTarget);

/**
 * Render your react app
 */
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/** Disable web vitals logs in production */
process.env.NODE_ENV === 'production' && reportWebVitals();

/** Enable web vitals logs only in development */
process.env.NODE_ENV === 'development' && reportWebVitals(console.log)
