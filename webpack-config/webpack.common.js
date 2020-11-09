const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  entry: {
    spacex: path.resolve(__dirname, "./../src/App.js"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "",
      filename: "index.html",
      template: path.resolve(__dirname, "./../html/index.html"),
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "static/images", to: "static" },
        { from: "static/robots.txt", to: "robots.txt" },
        { from: "static/manifest.json", to: "static/manifest.json" },
        { from: "static/asset-manifest.json", to: "asset-manifest.json" },
      ],
      options: {
        concurrency: 100,
      },
    }),
  ],
  output: {
    filename: "[name][chunkhash].js",
    path: path.resolve(__dirname, "./../dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};