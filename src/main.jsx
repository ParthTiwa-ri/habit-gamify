import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HabitProvider } from "./Context/DataContext.jsx";
import AuthProvider from "./Context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HabitProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </HabitProvider>
  </React.StrictMode>
);
