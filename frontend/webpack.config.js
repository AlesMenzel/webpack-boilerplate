var webpack = require('webpack');
var path = require("path");

module.exports = {
	entry: {
		app: ['./src/index.js']
	},
	output: {
		path: "/build",
		filename: 'bundle.js',
		publicPath: "/assets/"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=[hash].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
				]
			},
			{
				test: /\.s?css$/,
				loaders: ["style", "css", "sass"]
			}
		]
	},
	externals: {
		// Don't bundle the 'react' npm package with the component.
		'react': 'React'
	},
	resolve: {
		// Include empty string '' to resolve files by their explicit extension
		// (e.g. require('./somefile.ext')).
		// Include '.js', '.jsx' to resolve files by these implicit extensions
		// (e.g. require('underscore')).
		extensions: ['', '.js', '.jsx']
	},
	devServer: {
		host: 'localhost',
		port: '8080',
		contentBase: 'build/'
	}
};
