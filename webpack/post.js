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
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: './src/sw.js',
      swDest: 'sw.js'
    })
  ]
})
