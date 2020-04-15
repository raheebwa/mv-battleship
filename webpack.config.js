/* eslint-disable prefer-named-capture-group */
/* eslint-disable require-unicode-regexp */
/* eslint-disable sort-keys */
/* eslint-disable no-undef */


const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  'entry': {
    'app': './src/index.js',
    'print': './src/print.js'
  },
  'plugins': [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      'title': 'Setup Webpack App'
    })
  ],
  'output': {
    'filename': '[name].bundle.js',
    'path': path.resolve(__dirname, 'dist')
  },
  'module': {
  'rules': [
    {
      'test': /\.css$/,
      'use': [
        'style-loader',
        'css-loader'
      ]
    },
    {
      'test': /\.(png|svg|jpg|gif)$/,
      'use': ['file-loader']
    },
    {
      'test': /\.(woff|woff2|eot|ttf|otf)$/,
      'use': ['file-loader']
    },
    {
      'test': /\.(csv|tsv)$/,
      'use': ['csv-loader']
    },
    {
      'test': /\.xml$/,
      'use': ['xml-loader']
    }
  ]
  },
  'devServer': {
    'contentBase': path.join(__dirname, 'dist'),
    'compress': true,
    'port': 9000
  }
};
