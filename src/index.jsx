import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// Ensure App is the main component with your routes
import "./index.css";  // Keep the styles as necessary

import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/vite-react-deploy"> {/* Set base path */}
      <App /> {/* Ensure that App has your defined routes */}
    </BrowserRouter>
  </React.StrictMode>
);
