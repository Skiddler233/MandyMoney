import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App";
import './main.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Add BrowserRouter with the basename */}
    <BrowserRouter basename="/MandyMoney">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
