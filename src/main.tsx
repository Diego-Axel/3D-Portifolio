import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";

/**
 * Ponto de entrada da aplicação.
 * Inicializa o React e renderiza o componente principal (App) no elemento 'root' do HTML.
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

