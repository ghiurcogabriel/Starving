import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CartState from "./context/cart/CartState";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <CartState>
        <App />
      </CartState>
    </React.StrictMode>
  );
}
