const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ZipPlugin({
      filename: 'dist',
      path: path.resolve(__dirname),
    }),
  ],

  output: {
    filename: 'index.js',
    // path: path.resolve(__dirname, 'lib'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true,
          }
        }
      }
    ]
  }
};
