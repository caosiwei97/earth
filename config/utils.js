/*
 * @Author: caosiwei 
 * @Date: 2021-01-21 16:49:38 
 * @Last Modified by: caosiwei
 * @Last Modified time: 2021-01-22 15:23:42
 */

const path = require('path')

// path resolve
const resolve = (path) => path.join(__dirname, '..', path)
const APP_PATH = resolve('src')
const DIST_PATH = reolve('dist')

// resolve config
const getResolveConfig = (customAlias = {}) => {
  return {
    extentions: ['js', 'json'],
    modules: [APP_PATH, 'node_modules'], // 要查找的目录
    alias: {
      '@': APP_PATH,
      ...customAlias
    }
  }
}

module.exports = {
  APP_PATH,
  DIST_PATH,
  resolve,
  getResolveConfig
}
