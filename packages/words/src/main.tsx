import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { StoreProvider } from "./context/Store";

const root = document.querySelector("#root");
if (root !== null) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <StoreProvider>
        <App />
      </StoreProvider>
    </React.StrictMode>
  );
}
