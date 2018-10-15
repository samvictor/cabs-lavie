const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require('webpack');

const basePath = __dirname;

var config = {
	context: path.join(basePath, 'src'),
	resolve: {
		extensions: ['.tsx', '.ts','.js']
	},
	entry: './index.tsx',
	output: {
		path: path.join(basePath, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'awesome-typescript-loader'
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
		// Loading glyphicons => https://github.com/gowravshekar/bootstrap-webpack
		// Using here url-loader and file-loader
			{
				test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff'
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader'
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{ loader: "css-loader" },
					{ loader: "sass-loader" }
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg|cur)$/i,
				use: [
					'url-loader?limit=10000',
					'img-loader'
				]
			},
		],
	},
  // For development https://webpack.js.org/configuration/devtool/#for-development
  
  	
 	plugins: [
	//Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
		new HtmlWebpackPlugin({
	  		filename: 'index.html',
	  		template: './index.html', //Name of file in ./dist/
	  		hash: true,
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].[hash].css"
		})
	]
};

module.exports = (env, argv) => {

		if (argv.mode === 'development') {
			config.devtool= 'inline-source-map';
			config.devServer = {
				port: 9000,
				noInfo: true,
			};
		}
	
		if (argv.mode === 'production') {
			config.optimization = {
				splitChunks: {
					chunks: 'all',
					cacheGroups: {
						vendors: {
							test: /[\\/]node_modules[\\/]/,
							name: 'vendors',
							chunks: 'all',
							reuseExistingChunk: true
						}
					},
				},
				
				minimizer: [
					new OptimizeCSSAssetsPlugin({})
				]
			}
		}

	return config;
}
