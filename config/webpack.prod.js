const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new CopyWebpackPlugin()
  ]
})