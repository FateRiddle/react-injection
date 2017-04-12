const path = require('path')
const webpack = require('webpack')
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
    path: env.production?path.resolve(__dirname,"public/js"):path.resolve(__dirname,"pub/js"),
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
    ]
  },
  devtool:"cheap-module-eval-source-map",//"source-map",
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap:!env.production,
      compress:env.production,
    }),
    new webpack.optimize.CommonsChunkPlugin("commons"),//output will be commons.chunk.js
  ],
  devServer: {
    contentBase: path.resolve(__dirname,"public"),
  }
})
