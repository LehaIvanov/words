import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./components/App";
import { PageStoreProvider } from "./context/PageStore";

const root = document.querySelector("#root");
if (root !== null) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <PageStoreProvider>
        <App />
      </PageStoreProvider>
    </React.StrictMode>
  );
}
