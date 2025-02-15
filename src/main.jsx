import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CartProvider } from "./pages/components/context/cart.context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
