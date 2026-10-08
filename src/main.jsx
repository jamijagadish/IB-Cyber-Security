// Import core React libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import Root Component & Styles
import App from './App';
import './index.css';

// Render the application into the root DOM element with StrictMode enabled
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
