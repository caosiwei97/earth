const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const { resolve } = require('./utils')

const devConfig = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: resolve('public'),
    port: 9000,
    compress: true,
    open: true,
    // proxy demo
    // proxy: {
    //   '/api': {
    //     target: 'https://api.github.com',
    //     pathRewrite: {
    //       '^/api': ''
    //     },
    //     changeOrigin: true
    //   }
    // }
  }
})

module.exports = devConfig