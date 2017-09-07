import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import configureStore from "./store";
import { Provider } from "react-redux";

let store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
  const node = document.getElementById("react-root");
  const data = JSON.parse(node.getAttribute("data"));
  ReactDOM.render(
    <Provider store={store}>
      <App {...data} />
    </Provider>,
    node
  );
});
