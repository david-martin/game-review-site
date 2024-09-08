import React from 'react';
import ReactDOM from 'react-dom/client';  // Updated import
import App from './App';
import '@patternfly/react-core/dist/styles/base.css';

// Get the root DOM element
const container = document.getElementById('root');

// Use createRoot instead of ReactDOM.render
if (container) {
  const root = ReactDOM.createRoot(container);  // This is the new method for React 18
  root.render(<App />);
}
