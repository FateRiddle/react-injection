const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
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
    path: path.resolve(__dirname,"public/dist"),
    filename: "[name].chunk.js",
    publicPath: "/",
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
      },
      {
        test: /\.css$/,
        use: env.production?
        ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader:'css-loader',
            // options: {
            //   modules: true,
            //   localIdentName: '[local]--[hash:base64:5]',
            // }
          }]
        }):
        [ 'style-loader', {
          loader: 'css-loader',
          // options: {
          //   modules: true,
          //   localIdentName: '[local]--[hash:base64:5]',
          // }
        }]
      },
      {
        test: /\.(ttf|woff|jpeg|jpg|png|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/",
              // publicPath: "assets/",   //what is this for? you don't need it in html
              name: '[name]--[hash:base64:5].[ext]'
            }
          }
        ]
      }
    ]
  },
  devtool:"cheap-module-eval-source-map",//"cheap-module-eval-source-map",
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap:!env.production,
      compress:env.production,
    }),
    new webpack.optimize.CommonsChunkPlugin("commons"),//output will be commons.chunk.js
    new ExtractTextPlugin("[name].chunk.css"),
  ],
  devServer: {
    contentBase: path.resolve(__dirname,"public"),
    // proxy: {
    //   '/api':{
    //     target: 'http://localhost:3001',
    //     secure:false
    //   }
    // }
  }
})
