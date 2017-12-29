const merge = require('webpack-merge')
      common = require('./webpack/common.js'),
      prod = require('./webpack/prod.js'),
      post = require('./webpack/post.js'),
      dist = 'dist'

module.exports = merge(
  common(__dirname, dist),
  prod(),
  post()
)
