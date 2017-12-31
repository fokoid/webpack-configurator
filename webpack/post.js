const path = require('path'),
      WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = ({src, dist}) => ({
  plugins: [
    new WorkboxWebpackPlugin({
      swSrc: path.join(src, 'sw.js'),
      swDest: path.join(dist, 'sw.js')
    })
  ]
})
