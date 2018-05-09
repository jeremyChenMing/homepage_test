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
//  --------------------------------------->  代理部分

var httpProxy = require('http-proxy');

// var proxy = httpProxy.createProxyServer(options)

// Add middleware for http proxying


const proxy = require('http-proxy-middleware');//引入代理中间件
const apiProxy = proxy('/api', { target: 'http://localhost:8080',changeOrigin: true });//将服务器代理到localhost:8080端口上[本地服务器为localhost:3000]
// const apiProxy = proxy('/api', { target: 'http://api.hrbp.d.upvi.com',changeOrigin: true });
// app.use('/', apiProxy);//api子目录下的都是用代理



// <--------------------------------------

app.use(webpackHotMiddleware(compiler));
app.use(express.static(path.join(__dirname,'src' , 'public')));



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})

app.listen(8000, function () {
  console.log("Listening on port 8000!");
});