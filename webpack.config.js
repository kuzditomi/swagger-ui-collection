const webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path');

module.exports = {
  entry: "./app.js",
  mode: "development",
  output: {
    filename: "bundle.js"
  },
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, '.'),
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()]
}