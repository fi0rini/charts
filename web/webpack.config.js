var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src/index.jsx')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js?x$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {test: /\.css$/,                        loader:'style!css'},
      {test: /\.jpe?g$|\.gif$|\.png$|\.wav$|\.mp3$/, loader: "url-loader" },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "url-loader" },
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url-loader" },
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url-loader" },
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url-loader" },
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url-loader" }
    ]
  }
};
