import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "bulma/css/bulma.css";
import "./assets/css/style.css";
import "./assets/css/plugins.css";
import "./assets/css/icons.css";
import "./assets/plugins/bootstrap/css/bootstrap.min.css";
import axios from "axios";
//import  "./assets/plugins/bootstrap/js/bootstrap.min.js";
//import "./assets/plugins/bootstrap/js/popper.min.js";

axios.defaults.withCredentials = true; //set difault, jika tidak harus di set manual

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
