import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";

// Our Main app
const App = () => <Main />;

if (!document.getElementById("app").childNodes.length) {
  ReactDOM.render(<App />, document.getElementById("app"));
} else {
  ReactDOM.hydrate(<App />, document.getElementById("app"));
}
