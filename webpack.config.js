const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJsPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  optimization: {
    minimizer: [
      new TerserJsPlugin({}),
      new OptimizeCssAssetsPlugin({})
    ]
  },
  module: {
      rules: [
        {
          test: /\.(scss|sass)$/,
          use: [
            // {
            //   loader: MiniCssExtractPlugin.loader,
            //   options: {
            //     publicPath: path.resolve(__dirname, 'dist/css')
            //   }
            // },
            'style-loader','css-loader','sass-loader'
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
      ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    inline: true,
    open: 'chrome',
    watchContentBase: true,
    publicPath: '/js/',
    overlay: {
      warnings: true,
      errors: true
    }
  }
}