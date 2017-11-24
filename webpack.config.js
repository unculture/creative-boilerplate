const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
let baseConfig
const eventsConfig = require('smartcontent-cdk/webpack/webpack.config.events')
let webpackConfig
const path = require("path")

if (process.env.NODE_ENV !== 'production') {
 	baseConfig = require('smartcontent-cdk/webpack/webpack.config.dev');
	webpackConfig = merge(baseConfig, {});
}
else {
	baseConfig = require('smartcontent-cdk/webpack/webpack.config.prod');
	webpackConfig = [
		merge(baseConfig, {}), 
		eventsConfig
	]
}

module.exports = webpackConfig

