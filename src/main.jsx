import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // HashRouter: aman untuk GitHub Pages
import App from "./App";
import "./index.css";
import { KosProvider } from "./utils/KosContext";
import { FavProvider } from "./utils/FavContext";
import { AuthProvider } from "./utils/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <KosProvider>
          <FavProvider>
            <App />
          </FavProvider>
        </KosProvider>
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>
);
