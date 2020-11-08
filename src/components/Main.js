import React from "react";
import { Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { createMemoryHistory } from "history";
import loadable from "@loadable/component";

const Launch = loadable(() => import("./Launch"), { ssr: true });
const Footer = loadable(() => import("./Footer"), { ssr: true });

import "../app.scss";

// Browserhistory needs DOM, but we need it after server rendering
const selectedHistory =
  typeof window !== "undefined" ? createBrowserHistory : createMemoryHistory;

// exporting to use in Launch component
export const history = selectedHistory();

const Main = () => {
  return (
    <Router history={history}>
      <h2>SpaceX Launch Programs</h2>
      <Route exact path="/" component={Launch} />
      <div className="footer">
        <Footer />
      </div>
    </Router>
  );
};
export default Main;
