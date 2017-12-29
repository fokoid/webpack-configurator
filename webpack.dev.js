const merge = require('webpack-merge').strategy({ entry: 'prepend' }),
      common = require('./webpack/common.js'),
      dev = require('./webpack/dev.js'),
      post = require('./webpack/post.js'),
      dist = 'dist'

module.exports = merge(
  common(__dirname, dist),
  dev(__dirname, dist),
  post()
)
