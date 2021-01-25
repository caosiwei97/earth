/*
 * @Author: caosiwei 
 * @Date: 2021-01-21 16:49:38 
 * @Last Modified by: caosiwei
 * @Last Modified time: 2021-01-25 14:58:26
 */

const path = require('path')

// path resolve
const resolve = (dir) => path.join(__dirname, '..', dir)
const APP_PATH = resolve('src')
const DIST_PATH = resolve('dist')

// resolve config
const getResolveConfig = (customAlias = {}) => {
  return {
    extensions : ['.js', '.json'],
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
