const { resolve } = require('path')
const glob = require('glob')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const DIST      = resolve(__dirname, '..', 'dist')
const SRC       = resolve(__dirname, '..', 'src')
const TEMPLATES = resolve(__dirname, '..', 'templates')

const extractCSS = new ExtractTextPlugin({
  filename: 'main.css',
  allChunks: false,
})

module.exports = {
  target: 'web',
  profile: true,

  entry: {
    index: ['./src/index'],
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
        exclude: /(node_modules|dist|.webpack|public)/,
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

    new HtmlWebpackPlugin({
      title: 'New Simple Blog',
      template: `${TEMPLATES}/index.html`,
    })
  ],

  devServer: {
    contentBase: resolve(__dirname, '../', 'public'),
    port: 9000,
  },
}
