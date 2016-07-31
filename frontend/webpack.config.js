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
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['babel']
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=images/[hash].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
				]
			},
			{
				test: /\.s?css$/,
				loaders: ['style', 'css', 'sass']
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
