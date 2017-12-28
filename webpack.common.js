const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const dist = path.join(__dirname, 'dist')

module.exports = {
  entry: {
    app: [ './src/index.js' ],
    vendor: [
      'webpack-material-design-icons'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: dist
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
    new CleanWebpackPlugin([dist]),
    new HtmlWebpackPlugin({
      title: 'Webpack Configurator',
      inject: 'body'
    })
  ]
}
