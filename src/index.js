import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "./app/store/createStore";
import { Provider } from "react-redux";

const store = createStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <Provider store = { store }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    // </React.StrictMode>
);

reportWebVitals();
