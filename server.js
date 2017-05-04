var express = require('express');
var path = require('path');

var app = express();

var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var webpack = require("webpack");

var webpackConfig = require("./webpack.config");
var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  // publicPath: "/" // Same as `output.publicPath` in most cases.
  noInfo: false, 
  publicPath: webpackConfig.output.publicPath,
  historyApiFallback: true,
  stats: {
    colors: true,

    reasons: false,
    hash: false,
    version: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    cached: false,
    cachedAssets: false,
  }

}));


app.use(webpackHotMiddleware(compiler));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})

app.listen(8000, function () {
  console.log("Listening on port 8000!");
});