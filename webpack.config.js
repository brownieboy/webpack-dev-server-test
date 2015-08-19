var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);

var common = {
    entry: {
        app: [path.resolve(ROOT_PATH, 'app/app.jsx')]
    },
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js'
    }
};

if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devtool: 'source-map',
        module: {
            // Note: don't include the same loader in multiple places, e.g putting babel under "common" and here.
            // Webpack will error out if you try this.
            loaders: [{
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                include: path.resolve(ROOT_PATH, 'app')
            }]
        },
        devServer: {
            colors: true,
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    });
}
