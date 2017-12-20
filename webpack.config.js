const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const staticSourcePath = path.join(__dirname, 'static/css');
const sourcePath = path.join(__dirname, 'src');

module.exports = {
    entry: [
        path.resolve(staticSourcePath, 'main.scss'),
        path.resolve(sourcePath, 'index.js')
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist',
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            sourcePath,
            path.resolve(__dirname, 'node_modules')
        ]
    },

    plugins: [
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        }),
        new CopyWebpackPlugin([
            {from:'static/images', to:'images'}
        ]),
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ],
                include: sourcePath
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { minimize: true } },
                        'sass-loader'
                    ]
                })
            },
            { test: /\.md$/, loader: "html!markdown" },
            { test: /\.json$/, loader: "json" },
        ]
    },

    devServer: {
        historyApiFallback: true,
    }
};
