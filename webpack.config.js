var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
      path: __dirname + '/build',
      filename: 'assets/scripts/bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/, // a regular expression that catches .js files
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Extract css files
        {
          test: /\.css$/, // a regular expression that catches .css files
          loader: ExtractTextPlugin.extract("css-loader", "style-loader")
        }
      ]
    },
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
      new ExtractTextPlugin({
        filename: "assets/styles/bundle.css"
      })
    ],
    devServer: {
      port: 5000, // most common port
      contentBase: [__dirname, __dirname + "build/assets/*"],
      inline: true
    }
  }