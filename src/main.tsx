import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import App from "./App.tsx";
import { ColorModeProvider } from "./context/ColorModeContext";
import ErrorFallBack from "./components/ErrorFallBack.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ColorModeProvider>
    <ErrorBoundary
      FallbackComponent={ErrorFallBack}
      onReset={() => window.location.replace("/")}
    >
      <App />
    </ErrorBoundary>
  </ColorModeProvider>
);
