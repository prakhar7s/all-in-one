import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HeaderContextProvider } from "./context/header-context";

ReactDOM.render(
  <Router basename="/all-in-one">
    <HeaderContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HeaderContextProvider>
  </Router>,
  document.getElementById("root")
);
