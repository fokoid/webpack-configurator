const merge = require('webpack-merge').strategy({ entry: 'prepend' }),
      common = require('./webpack/common.js'),
      dev = require('./webpack/dev.js'),
      post = require('./webpack/post.js')

module.exports = merge(common, dev, post)
