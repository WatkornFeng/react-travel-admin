import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ColorModeProvider } from "./context/ColorModeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ColorModeProvider>
      <App />
    </ColorModeProvider>
  </React.StrictMode>
);
