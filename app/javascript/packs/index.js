import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import configureStore from "./store";
import { Provider } from "react-redux";

let store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("react-root")
  );
});
