import React from "react";
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
    <React.Fragment>
      <h2>SpaceX Launch Programs</h2>
      <Launch />
      <Footer />
    </React.Fragment>
  );
};
export default Main;
