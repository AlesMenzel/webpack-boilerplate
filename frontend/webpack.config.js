var webpack = require('webpack')

module.exports = {
	entry: {
		app: ['./src/entry.js'],
		vendor: ['react', 'react-dom', 'lodash', 'react-bootstrap']
	},
	output: {
		path: './build',
		filename: 'bundle.js',
		publicPath: './'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
	],
	module: {
		loaders: [
			{
				test: /\.html$/,
				exclude: /node_modules/,
				loaders: ['file?name=[name].[ext]']
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loaders: [
					'babel'
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=images/[hash].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
				]
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loaders: ['file?name=fonts/[name].[ext]']
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devServer: {
		host: 'localhost',
		port: '8080',
		contentBase: 'build/'
	}
};
