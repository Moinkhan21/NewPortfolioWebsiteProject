import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure correct path to App component
import './index.css'; // Ensure global styles are loaded if needed

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
