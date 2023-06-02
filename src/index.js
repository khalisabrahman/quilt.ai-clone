import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";

import App from "./App";
import "./index.css";
import { theme } from "./theme";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App></App>
    </ThemeProvider>
  </React.StrictMode>
);
