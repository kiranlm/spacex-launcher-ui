import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Main from "./components/Main";
import { configureStore } from "./redux";

// Our Main app
const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
};

if (!document.getElementById("app").childNodes.length) {
  ReactDOM.render(<App />, document.getElementById("app"));
} else {
  ReactDOM.hydrate(<App />, document.getElementById("app"));
}
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}
