const merge = require('webpack-merge')
      common = require('./webpack/common.js'),
      prod = require('./webpack/prod.js'),
      post = require('./webpack/post.js')

module.exports = merge(common, prod, post)
