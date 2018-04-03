var Webpack = require("webpack");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");
var _rules = [];
_rules.push({
  test: /\.css$/,
  use: [
    {
      loader: "style-loader"
    },
    {
      loader: "css-loader"
    }
  ]
});
_rules.push({
  test: /\.js$/,
  exclude: /node_modules/,
  loader: "babel-loader"
});
_rules.push({
  test: /\.(png|jpg|gif)$/,
  use: [
    {
      loader: "file-loader",
      options: {
        name: "[path][name].[ext]"
      }
    }
  ]
});
module.exports = {
  entry: "./src/player.js",
  output: {
    path: path.resolve("./dist/[hash:8]/"),
    filename: "h5player.js"
  },
  module: {
    rules: _rules
  },
  plugins: []
};
