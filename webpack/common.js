const path = require('path'),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (dirname, dist) => ({
  entry: {
    app: [ './src/index.js' ],
    vendor: [
      'webpack-material-design-icons'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(dirname, dist)
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.(jpg|png|gif|svg|tiff|ico)$/, use: 'file-loader' },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: 'file-loader' }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([dist], { root: dirname }),
    new HtmlWebpackPlugin({
      title: 'Webpack Configurator',
      inject: 'body'
    })
  ]
})
