import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SearchProvider from "./context/searchContext.jsx";
import WishlistProvider from "./context/wishlistContext.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <WishlistProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </WishlistProvider>
    </HelmetProvider>
  </React.StrictMode>
);
