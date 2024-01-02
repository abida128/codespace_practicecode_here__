import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js"
import { store } from "./store.js"

const root = createRoot(document.getElementById("app"));

// Store State Change Listener
const render = () => {
  root.render(<App/>);
}

render();

// Subscribe to state changes

