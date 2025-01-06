import AppProvider from "@context/context-provider.jsx";
import LoadProvider from "@context/load-context.jsx";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./app/App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <LoadProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </LoadProvider>
  </HashRouter>
);
