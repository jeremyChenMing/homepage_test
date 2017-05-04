var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


const nodeEnv = process.env.NODE_ENV || 'development';
const isPro = nodeEnv === 'production';

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
	                presets: [
	                    'react', 
	                    // 'es2015',
	                    'env',
	                ]
	             }
		      }]
	    },{
	    	test: /\.less$/,
	    	use: [
	    		'style-loader',
			    'css-loader',
			    'less-loader'
	    	]
	    }
	    ,{
	    	test: /\.(png|jpg|jpeg|gif|svg)$/,
            use: [{
            	loader: 'url-loader',
            	query: {
            		limit: 8192,
            		name: 'images/[hash:3].[name].[ext]'
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
	},
	plugins: [
        new ExtractTextPlugin('css/[name].css'),
        new webpack.optimize.UglifyJsPlugin({
		    compress: {
		      warnings: false,
		    }
		}),
		new webpack.DefinePlugin({
		  "process.env": { 
		     NODE_ENV: JSON.stringify("production") 
		   },
		   "__dev__": JSON.stringify(isPro) 
		}),
        new HtmlWebpackPlugin({
            template: "./home.html"  //new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.DllReferencePlugin({
		  	context: path.resolve(__dirname,'./src'), // 指定一个路径作为上下文环境，需要与DllPlugin的context参数保持一致，建议统一设置为项目根目录
		  	manifest: require('./manifest.json'), // 指定manifest.json
		  	// name: '[name]_[chunkhash]',  // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
		})
   	],
} 