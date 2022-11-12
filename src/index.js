import React from "react";
import ReactDOM from "react-dom/client";
import Page from "./Page";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <React.StrictMode>
      <Page />
    </React.StrictMode>
    </BrowserRouter>

);