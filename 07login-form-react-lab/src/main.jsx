import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LoginForm from "./AppLogin.jsx";
import AppLogin from "./AppLogin.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <AppLogin />
  </StrictMode>
);
