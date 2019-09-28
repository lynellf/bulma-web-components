const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.config.common')

module.exports = merge(
	{
		mode: 'development',
		watch: true,
		devtool: 'inline-source-map',
		output: {
			path: `${__dirname}/dev`,
			filename: 'bundle.[hash].js'
		},
		module: {
			rules: [
				{
					test: /\.(html)$/,
					use: {
						loader: 'html-loader',
						options: {
							attrs: [ ':data-src' ]
						}
					}
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: `${__dirname}/template.html`
			}),
			new CleanWebpackPlugin()
		]
	},
	common
)
