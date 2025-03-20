import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app/app";
import "./style/index.scss";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
