import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root/root";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { MainProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainProvider>
      <Router>
        <Root />
      </Router>
    </MainProvider>
  </React.StrictMode>
);
