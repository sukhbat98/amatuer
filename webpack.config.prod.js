const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
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
      filename: 'main.css', // Output CSS filename for production
    }),
  ],
});
