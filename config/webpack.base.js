/*
 * @Author: caosiwei
 * @Date: 2021-01-21 16:46:07
 * @Last Modified by: caosiwei
 * @Last Modified time: 2021-01-26 13:42:35
 */

const path = require('path')
const { APP_PATH, DIST_PATH, getResolveConfig, resolve } = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const baseConfig = {
  entry: {
    earth: path.join(APP_PATH, 'main.js')
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: DIST_PATH
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|gif|jpg|svg)$/i,
        type: 'asset', // 根据资源自动切换
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024 // 小于 8k 转为baseURL
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset'
      }
    ]
  },
  resolve: getResolveConfig({
    'assets': resolve('src/assets')
  }),
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('public/index.html')
    })
  ]
}
module.exports = baseConfig
