const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 3000,
    contentBase: './dist',
    open: true,
    watchContentBase: true,
    historyApiFallback: true, // Enable historyApiFallback
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // Use MiniCssExtractPlugin to extract CSS
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css', // Output CSS filename for development
    }),
  ],
});
