const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const { resolve } = require('./utils')

const devConfig = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    contentBase: resolve('public'),
    port: 9000,
    compress: true,
    open: true
  }
})

module.exports = devConfig