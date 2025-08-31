import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PlanetsProvider } from "./context/PlanetsContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <PlanetsProvider>
    <App />
  </PlanetsProvider>
);
