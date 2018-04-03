var Webpack = require("webpack");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");
var WebpackDevServer = require("webpack-dev-server");
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
      options: {}
    }
  ]
});
var webpackConfig = {
  devtool: "eval-source-map",
  entry: "./src/player.js",
  output: {
    path: __dirname,
    filename: "h5player.js"
  },
  module: {
    rules: _rules
  },
  plugins: []
};
var port = "8080";
var compiler = Webpack(webpackConfig);
var server = new WebpackDevServer(compiler);
server.listen(port, "127.0.0.1", () => {
  console.log("start server http://localhost:" + port);
});
