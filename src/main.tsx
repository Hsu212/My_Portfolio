import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Permanently force dark mode
document.documentElement.classList.add("dark");
// Optional: prevent accidental removal
// document.documentElement.classList.remove("light");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
