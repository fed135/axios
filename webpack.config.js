'use strict';
var webpack = require('webpack');
var config = {};

function generateConfig(name) {
  var uglify = name.indexOf('min') > -1;
  var webpackConfig = {
    entry: './index.js',
    mode: 'production',
    output: {
      filename: name + '.js',
      sourceMapFilename: name + '.map',
      library: 'axios',
      libraryTarget: 'umd'
    },
    optimization: {
      minimize: uglify
    },
    node: {
      process: false
    },
    devtool: 'source-map'
  };

  webpackConfig.plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ];

  return webpackConfig;
}

['axios', 'axios.min'].forEach(function loop(key) {
  config[key] = generateConfig(key);
});

module.exports = config;
