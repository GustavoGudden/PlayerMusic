import React from "react";
import ReactDOM from "react-dom/client";
import { Globalstyle } from "./globalStyle";
import { Home } from "./pages/home";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Globalstyle />
    <Home></Home>
  </React.StrictMode>
);
