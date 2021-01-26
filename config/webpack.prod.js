/*
 * @Author: caosiwei 
 * @Date: 2021-01-26 13:30:22 
 * @Last Modified by:   caosiwei 
 * @Last Modified time: 2021-01-26 13:30:22 
 */

const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const { resolve, DIST_PATH } = require('./utils')

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: resolve('public'), to: DIST_PATH },
      ],
    })
  ]
})