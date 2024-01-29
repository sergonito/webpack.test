const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const HtmlMinifier = require('html-minifier');

const config = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[contenthash].js',
        assetModuleFilename: "[name][ext]",
        clean: true,
    },
    performance: {
        hints: false,
        maxAssetSize: 512000,
        maxEntrypointSize: 512000,
    },
    devServer: {
        port: 9000,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'My Web Page 123',
            filename: "index.html",
            template: path.resolve(__dirname, 'src/index.html'),
            inject: 'body',
            meta: {
                description: 'lol)))'
            },
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        })
    ]
};

module.exports = config;