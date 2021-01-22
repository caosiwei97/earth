/*
 * @Author: caosiwei
 * @Date: 2021-01-21 16:46:07
 * @Last Modified by: caosiwei
 * @Last Modified time: 2021-01-22 16:21:56
 */

const path = require('path')
const { APP_PATH, DIST_PATH, getResolveConfig, resolve } = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const baseConfig = {
  entry: path.join(APP_PATH, 'main.js'),
  output: {
    filename: 'earth.bundle.js',
    path: DIST_PATH
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|gif|jpg|svg)$/i
      }
    ]
  },
  resolve: getResolveConfig(),
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('public/index.html')
    })
  ]
}
module.exports = baseConfig
