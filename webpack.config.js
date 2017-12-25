const {
  LoaderOptionsPlugin,
} = require('webpack')

const { resolve } = require('path')
const glob = require('glob')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


const IMAGES = resolve(__dirname, './', 'style/images')
const DIST = resolve(__dirname, './', 'dist')
const SRC = resolve(__dirname, './', 'src')

const extractCSS = new ExtractTextPlugin({
  filename: 'main.css',
  allChunks: false,
})

module.exports = {
  target: 'web',
  profile: true,

  entry: {
    index: [
      './src/index',
      './style/css/main.scss',
    ],
  },

  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: DIST,
    pathinfo: true,
  },

  performance: {
    hints: false,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      SRC,
      'node_modules',
    ],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
        include: SRC,
      },

      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
          ],
        }),
      },

      {
        test: /\.scss$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                modules: true,
                importLoaders: 1,
                minimize: true,
                sourceMap: true,
              },
            },
          ],
        }),
      },

    ],
  },

  plugins: [
    extractCSS,

    new LoaderOptionsPlugin({
      debug: true,
      minimize: false,
    }),

    new CopyWebpackPlugin([
      {from: IMAGES, to: 'images'},
    ]),
  ],

  devServer: {
    contentBase: resolve(__dirname, './', 'public'),
  },
}
