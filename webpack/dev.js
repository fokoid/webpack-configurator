const webpack = require('webpack')
const { output } = require('./common.js')

module.exports = {
  entry: {
    app: [ 'react-hot-loader/patch' ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: output.path,
    compress: true,
    port: 3000,
    hot: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
