/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const proxy = require('http-proxy-middleware');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: common.dest,
    port: 3000,
    hot: true,
    proxy: {
      '/': 'http://localhost:3001',
    },
  },
  module: {
    rules: [
      { test: /\.html$/, loader: 'raw-loader' },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
