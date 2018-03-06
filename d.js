var Webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = {
    entry: './src/main.js',
    output: {
        path: __dirname,
        filename: 'h5player.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: 'babel-loader'
        }]
    }
}
var port = '8080';
var compiler = Webpack(webpackConfig);
var server = new WebpackDevServer(compiler);
server.listen(port, '127.0.0.1', () => {
    console.log('start server http://localhost:' + port);
});