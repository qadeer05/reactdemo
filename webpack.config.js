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
        }
      ]
    },
    devServer: {
      port: 5000, // most common port
      contentBase: [__dirname, __dirname + "build/assets/scripts"],
      inline: true
    }
  }