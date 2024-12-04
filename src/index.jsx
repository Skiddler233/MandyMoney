import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App'; // Your main App component

const rootElement = document.getElementById('root');

// Using createRoot to render the app
const root = ReactDOM.createRoot(rootElement);
root.render(
  <BrowserRouter basename="/MandyMoney">  {/* Set the base path here */}
    <App />
  </BrowserRouter>
);
