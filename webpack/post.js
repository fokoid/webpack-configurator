const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
  plugins: [
    new WorkboxWebpackPlugin({
      clientsClaim: true,
      skipWaiting: true
    })
  ]
}
