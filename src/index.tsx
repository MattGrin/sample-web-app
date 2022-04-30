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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
process.env.NODE_ENV === 'production' && reportWebVitals();
process.env.NODE_ENV === 'development' && reportWebVitals(console.log)
