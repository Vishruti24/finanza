import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/* React Router */
import { BrowserRouter } from "react-router-dom";

/* CSS */
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/lib/animate/animate.min.css";
import "./assets/lib/owlcarousel/assets/owl.carousel.min.css";

/* Icons */
import "@fortawesome/fontawesome-free/css/all.min.css";

/* Bootstrap JS */
import "bootstrap/dist/js/bootstrap.bundle.min.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>
);