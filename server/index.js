const express = require("express");
const request = require("request");
const path = require("path");
const fs = require("fs");
const React = require("react");
const { renderToNodeStream } = require("react-dom/server");
const url = require("url");

// use the built main component
const Main = require("./../dist-ssr/Main").default;
const app = express();

// for spacex data
const baseUrl = "https://api.spacexdata.com/v3/launches";

// root url
app.get("/", (req, res) => {
  // To get the query string
  const queryStr = url.parse(req.url, true);
  // make the query string with filters from client
  const requUrl = `${baseUrl}${
    queryStr.search && queryStr.search.trim() !== ""
      ? queryStr.search
      : "?limit=100"
  }`;
  // ssr template
  const html = fs.readFileSync(
    path.resolve(__dirname, `./../dist/ssr.html`),
    "utf-8"
  );
  // split from {content}, take 2 parts say head and tail, then join the tail with the data
  const [head, tail] = html.split("{content}");
  res.write(head);
  // call service - since this is the only call, I'm not moving it to any other file
  request(
    {
      method: "GET",
      url: requUrl,
    },
    (_err, _httpsRes, body) => {
      // join the response in tail on {script} section in template
      const newTail = tail.split("{script}").join(`
      <script id="ssr__script">
        window.launchData = ${JSON.stringify(body)}
      </script>
      `);
      // our main component
      const reactElement = React.createElement(Main);
      const stream = renderToNodeStream(reactElement);
      stream.pipe(res, { end: false });
      stream.on("end", () => {
        res.write(newTail);
        res.end();
      });
    }
  );
});

// for ssr local dev
app.get("/client", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./../dist/index.html"));
});

app.use(express.static(path.join(__dirname, "./../dist")));

// port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
