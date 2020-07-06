'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://47.106.92.96:9093/datamon/v1"',
  // IMG_URL : '"http://111.207.104.159:8088/admin/file/"'//报错401
	 IMG_URL : '"http://61.145.74.67:8088/admin/file/"'
})
