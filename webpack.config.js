const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    config: './assets/js/config',
    scripts: './assets/js/scripts.js',
  },
  output: {
    path: path.resolve(__dirname, './assets/bundled'),
    filename: '[name]-bundle.js',
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '../../style.css' }),
    new BrowserSyncPlugin({
      files: '**/*.php',
      proxy: 'http://tailwindtemplate.local',
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin(),
      new OptimizeCssAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: false } }],
        },
      }),
    ],
  },
};
