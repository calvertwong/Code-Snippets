import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="feature/*" element={<App />} />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
