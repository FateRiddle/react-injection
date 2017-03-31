const path = require('path')
const webpack = require('webpack')
// const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin

module.exports = {
  // context: __dirname + "/app",
  entry: {
    index: "./src/index.js",
    page1: "./src/page1.js",
    page2: "./src/page2.js",

  },
  output: {
    path: __dirname + "/public/js",
    filename: "[name].chunk.js",
  },
  module: {
    loaders: [
      {
        // "test" is commonly used to match the file extension
        test: /\.js$/,

        // "include" is commonly used to match the directories
        include: [
          path.resolve(__dirname, "src")
        ],

        // the "loader"
        loader: "babel-loader" // or "babel" because webpack adds the '-loader' automatically
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new CommonsChunkPlugin("commons"),//output will be commons.chunk.js
  ],
  devServer: {
    contentBase: 'public/',
  }
}
