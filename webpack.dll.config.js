var path = require('path');
var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');//清理打包文件用的

const vendors = [
  'moment',
  'react',
  'react-dom',
  'react-router',
  'redux',
  'react-redux',
  'redux-form'
];

module.exports = {
  output: {
    path:  path.resolve(__dirname, 'dist'),
    // filename: '[name].[chunkhash].js',
    filename: '[name].js',
    // library: '[name]_[chunkhash]',
    library: '[name]',
    publicPath: '/'
  },
  entry: {
    dll: vendors,
  },
  plugins: [
    new CleanPlugin(['dist']), //清理文件夹

    // new HtmlWebpackPlugin({
    //     inject  : 'body',
    //     template: "./home.html",  //new 一个这个插件的实例，并传入相关的参数
    // }),

    new webpack.DllPlugin({
      path: 'manifest.json',
      // name: '[name]_[chunkhash]',
      name: '[name]',
      context: path.resolve(__dirname,'./src')
    }),
  ],
};
