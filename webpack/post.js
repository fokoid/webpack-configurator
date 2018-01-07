const path = require('path'),
      BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
      WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = ({src, dist}) => ({
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'bundle-report.html',
      openAnalyzer: false
    }),
    new WorkboxWebpackPlugin({
      swSrc: path.join(src, 'sw.js'),
      swDest: path.join(dist, 'sw.js')
    })
  ]
})
