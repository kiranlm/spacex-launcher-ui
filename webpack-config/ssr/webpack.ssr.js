const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const config = {
  mode: "production",
  target: "node",
  externals: [nodeExternals()],
  entry: {
    Main: path.resolve(__dirname, "./../../src/components/Main"),
  },
  output: {
    path: path.resolve(__dirname, "./../../dist-ssr"),
    filename: "[name].js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.(scss|css)$/, loader: "ignore-loader" },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new UglifyJsPlugin({
      test: /\.js$/,
      exclude: /node_modules/,
      sourceMap: true,
      uglifyOptions: {
        sourceMap: false,
        compress: true,
        mangle: true,
      },
    }),
  ],
};

module.exports = config;
