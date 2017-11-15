const merge = require('webpack-merge');
let baseConfig
const path = require("path")

if (process.env.NODE_ENV !== 'production') {
 	baseConfig = require('smartcontent-cdk/webpack/webpack.config.dev');
}
else {
	baseConfig = require('smartcontent-cdk/webpack/webpack.config.prod');
}

module.exports = merge(baseConfig, {});

