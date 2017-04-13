const path = require('path')
const webpack = require('webpack')
// const ExtractTextPlugin = require("extract-text-webpack-plugin")
// const isProd = process.env.NODE_ENV === 'production'

module.exports = (env={}) => ({  // env={} so if not specified, env.production === false, development mode
  context: path.resolve(__dirname,'src'),
  // context: __dirname + "/app",
  entry: {
    index: "./index.js",
    page1: "./page1.js",
    page2: "./page2.js",
  },
  output: {
    path: path.resolve(__dirname,"public/js"),
    filename: "[name].chunk.js",
    publicPath: "/js",
  },
  module: {
    rules: [
      {
        // "test" is commonly used to match the file extension
        test: /\.(js|jsx)$/,
        // "include" is commonly used to match the directories
        include: [
          path.resolve(__dirname, "src")
        ],
        // the "loader"
        loader: "babel-loader",
        options: {},
      }
    ],
    // [
    //   test: /\.css$/,
    //   use: ExtractTextPlugin.extract({
    //     fallback: "style-loader",
    //     use: "css-loader"
    //   })
    // ]
  },
  devtool:"cheap-module-eval-source-map",//"cheap-module-eval-source-map",
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap:!env.production,
      compress:env.production,
    }),
    new webpack.optimize.CommonsChunkPlugin("commons"),//output will be commons.chunk.js
    // new ExtractTextPlugin("style.css"),
  ],
  devServer: {
    contentBase: path.resolve(__dirname,"public"),
  }
})
