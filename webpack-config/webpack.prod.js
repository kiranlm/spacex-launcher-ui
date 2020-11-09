const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const uglifyPlugin = {
  test: /\.js$/,
  exclude: /node_modules/,
  sourceMap: true,
  uglifyOptions: {
    sourceMap: false,
    compress: true,
    mangle: true,
  },
};

const client = merge(common, {
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css",
    }),
    new UglifyJsPlugin(uglifyPlugin),
  ],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
    removeAvailableModules: true,
  },
});

const server = {
  mode: "production",
  target: "node",
  node: { __dirname: false },
  externals: [nodeExternals()],
  entry: {
    "index.js": path.resolve(__dirname, "./../server/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./../dist-ssr"),
    filename: "[name]",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      { test: /\.(scss|css)$/, loader: "ignore-loader" },
    ],
  },
  plugins: [new CleanWebpackPlugin(), new UglifyJsPlugin(uglifyPlugin)],
};

module.exports = [client, server];
