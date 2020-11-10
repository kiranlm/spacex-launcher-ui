import React from "react";
import { createBrowserHistory,createMemoryHistory } from "history";
import loadable from "@loadable/component";
import "../app.scss";

const Launch = loadable(() => import("./Launch"), { ssr: true });

// Browserhistory needs DOM, but we need it after server rendering
const selectedHistory =
  typeof window !== "undefined" ? createBrowserHistory : createMemoryHistory;

// exporting to use in Launch component
export const history = selectedHistory();

const Main = () => (
    <>
      <h2>SpaceX Launch Programs</h2>
      <Launch />
    </>
  );
export default Main;
