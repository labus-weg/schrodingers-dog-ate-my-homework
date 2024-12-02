// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Make sure this file exists for global styles
import App from './App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
