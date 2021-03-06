var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isPro = nodeEnv === 'production';
const Manifest = require('./manifest.json');

module.exports = {
	entry: './src/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
	    rules: [{
		      test: /\.js$/,
		      exclude: /node_modules/,
		      use: [{
		        loader: 'babel-loader',
		        query:{  
	                babelrc: false,
	                // cacheDirectory:true,  //开启缓存模式  默认是false
	                presets: [
	                    'react', 
	                    // 'es2015',
	                    'env',
	                ],
	                plugins: [
					    ["import", { libraryName: "antd", style: 'css' }] // `style: true` 会加载 less 文件
					]
	            }
		      }]
	    },{
	    	test: /\.less$/,
	    	use: [
	    		{ loader :'style-loader'},
			    { loader :'css-loader?modules=true&localIdentName=[name]_[local]_[hash:base64:3]'},
			    { loader :'less-loader'}
	    	]
	    }
	    ,{
	    	test: /\.(png|jpg|jpeg|gif|svg)$/,
            use: [{
            	loader: 'url-loader',
            	query: {
            		limit: 8192,
            		name: 'images/[name].[ext]'
            	}
            }]
	    }
	    ,{
	    	test: /\.css$/,
	        use: ExtractTextPlugin.extract({
	          fallback: "style-loader",
	          use: "css-loader",
	          // publicPath:'/dist'
	        })
	    },{
	    	test: /\.(eot|ttf|wav|mp3)$/,
            use: [{
            	loader: 'file-loader',
            	query: {
            		name: 'files/[name].[ext]'
            	}
            }],
	    }]
	},
	resolve: {
		extensions: [".js", ".json", ".jsx", ".css", "scss"],
		// alias: { 'react': 'react/dist/react.js', }, //配置路径的映射  减少文件递归解析
		// modules: [path.resolve(__dirname, 'node_modules')], //指定import路径到本地的node_modules,不用向上递归去搜索，可以减少时间
	},
	plugins: [
        new ExtractTextPlugin('css/[name].css'),
        new webpack.optimize.UglifyJsPlugin({
		    compress: {
		      warnings: false, //删除没有用到的代码时候不输入警告
		      drop_console: true, //删除所有的console语句npm
		      // beautify: false, //最紧凑的输出
		      // comments: false, //删除所有的注视
		    }
		}),
		new webpack.DefinePlugin({
		  "process.env": { 
		     NODE_ENV: JSON.stringify("production") 
		   },
		   "__dev__": JSON.stringify(isPro) 
		}),

        new HtmlWebpackPlugin({
        	inject  : 'body',
        	filename: 'index.html',
            template: "./home.html",  //new 一个这个插件的实例，并传入相关的参数
            // hash : true
        }),
        new webpack.DllReferencePlugin({
		  	context: path.resolve(__dirname,'./src'), // 指定一个路径作为上下文环境，需要与DllPlugin的context参数保持一致，建议统一设置为项目根目录
		  	manifest: require('./manifest.json'), // 指定manifest.json
		  	// name: '[name]_[chunkhash]',  // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
		})
   	],
} 