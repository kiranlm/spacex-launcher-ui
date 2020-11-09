import compression from "compression";
import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import { renderToNodeStream } from "react-dom/server";
import fetch from "node-fetch";
import url from "url";
import Main from "../src/components/Main";

const app = express();

app.use(compression());

app.get("/", (req, res) => {
  // To get the query string
  const queryStr = url.parse(req.url, true);
  // make the query string with filters from client
  const requUrl = `https://api.spacexdata.com/v3/launches${
    queryStr.search && queryStr.search.trim() !== ""
      ? queryStr.search
      : "?limit=100"
  }`;
  // ssr template
  const html = fs.readFileSync(
    path.resolve(__dirname, `./../dist/index.html`),
    "utf-8"
  );
  // split from {content}, take 2 parts say head and tail, then join the tail with the data
  const [head, tail] = html.split(`<span id="content"/>`);
  res.write(head);
  // call service - since this is the only call, I'm not moving it to any other file
  fetch(requUrl)
    .then((res) => res.json())
    .then((jsonData) => {
      // join the response in tail on {script} section in template
      const newTail = tail.split(`<span id="script"/>`).join(`
            <script id="ssr__script">
              window.__SPACEX_DATA__ = ${JSON.stringify(jsonData)}
            </script>
            `);
      // our main component
      const stream = renderToNodeStream(<Main />);
      stream.pipe(res, { end: false });
      stream.on("end", () => {
        res.write(newTail);
        res.end();
      });
    });
});

app.use(express.static(path.join(__dirname, "./../dist")));

app.get("*", (_req, res) => {
  res.status(404).send(`
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="description" content="SpaceX launch program list using React SSR" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="theme-color" content="#caedb0"/>
        <link rel="manifest" href="static/manifest.json" />
        <link rel="shortcut icon" href="static/favicon.ico" />
        <link rel="apple-touch-icon" href="static/icon.png"/>
        <title>SpaceX Launcher</title>
        <style>
          body { font-family: Arial, sans-serif; font-size: 15px; }
          h1 { color: #c7c7c7; text-align: center; }
        </style>
      </head>

      <body>
        <h1>404 - Not Found</h1>
      </body>
    </html>`);
});

// port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
