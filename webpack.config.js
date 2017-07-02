var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


const nodeEnv = process.env.NODE_ENV || 'development';
const isPro = nodeEnv === 'production';

const config = {
	devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
  	// entry:  ['webpack-hot-middleware/client', __dirname + "/src/main.js"],//已多次提及的唯一入口文件
  	entry:  { //提取公共包
  		main:['webpack-hot-middleware/client', __dirname + "/src/main.js"],//已多次提及的唯一入口文件
  		vendor: ['moment','react','react-dom','react-redux','react-router','react-router-dom']
  	},
	output : {
		// filename: 'bundle.js',
		filename: '[name].[hash:6].js',
        // chunkFilename: "[name].[chunkhash:6].js",
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module : {
		rules : [{
			test : /\.js$/,
			exclude : /node_modules/,
			use  : [
				{
					loader : 'babel-loader',
					query:{  
	                	babelrc: false,
	                	presets: [
		                    'react', 
		                    // 'es2015',
		                    'env',
		                ],
		                env:{
		                  development:{
		                    plugins:[
		                      ['react-transform',{
		                        'transforms': [
		                          {
		                            transform: 'react-transform-hmr',
		                            imports: ['react'],
		                            locals: ['module'],
		                          } 
		                        ] 
		                      }]
		                    ]
		                  }
		                },  
		                plugins: [
						    ["import", { libraryName: "antd", style: 'css' }] // `style: true` 会加载 less 文件
						]
		            },
		            
				}
			]
		}, {
			test  : /\.less$/,
			use: [
	    		{ loader :'style-loader'},
			    { loader :'css-loader?modules=true&localIdentName=[name]_[local]_[hash:base64:3]'},
			    { loader :'less-loader'}
	    	]
		},{
	    	test: /\.(png|jpg|jpeg|gif|svg)$/,
            use: [{
            	loader: 'url-loader',
            	query: {
            		limit: 8192,
            		name: 'images/[hash:3].[name].[ext]'  //这种方式引发需要require 才会带有hash，如果用／的话，css是不解析的
            		// name: 'images/[name].[ext]'
            	}
            }]
	    }
	    ,{
	    	test: /\.css$/,
	        // use: ExtractTextPlugin.extract({
	        //   fallback: "style-loader",
	        //   use: "css-loader",
	        //   publicPath:'/'
	        // })
	        use: ExtractTextPlugin.extract({
	        	// use: 'css-loader?modules=true&localIdentName=[name]_[local]_[hash:base64:3]'
	        	use: 'css-loader'
	        })
	    },{
	    	test: /\.(eot|ttf|wav|mp3)$/,
            use: [{
            	loader: 'file-loader',
            	query: {
            		name: 'files/[hash:3].[name].[ext]'
            	}
            }],
	    }]
	},
	resolve: {
		extensions: [".js", ".json", ".jsx", ".css", "less"],
	},
	plugins : [
		new ExtractTextPlugin('css/[name].css'),
		new HtmlWebpackPlugin({
            template: "./home.html"  //new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.DefinePlugin({
		  "process.env": { 
		     NODE_ENV: JSON.stringify("production") 
		   },
		   "__dev__": JSON.stringify(isPro) 
		}),
        new webpack.HotModuleReplacementPlugin(), //应用了这个就不可以在应用chunkhash，而只能应用hash才可以，所以热更新的时候CommonsChunkPlugin并不会起作用，顶多分离包
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'], // 指定公共 bundle 的名字。这个只适合在打包的时候用，不适合开发用
        })
	]
}

module.exports = config;