const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: '/src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  target: 'web',
  mode: process.env.NODE_ENV,
  devtool: 'eval-source-map',

  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    historyApiFallback: true,

    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      '/assets/**': {
        target: 'http://localhost:3000/',
      },
      '/server/**': {
        target: 'http://localhost:3000/',
      },
    },
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './dist/index.html'),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },

      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
};
