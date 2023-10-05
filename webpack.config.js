const path = require('path');
const webpack = require("webpack")
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: 'file-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Your HTML template
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: path.join(__dirname, 'dist'),
          noErrorOnMissing: true
        }
      ]
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // File extensions to resolve
  },
  devServer: {
    historyApiFallback: true,
  }
};
