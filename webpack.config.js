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

    // ,module: {
    // Don't include the same loader in multiple places.  Webpack will error out.
    //     loaders: [{
    //         test: /\.css$/,
    //         loaders: ['style', 'css'],
    //         include: path.resolve(ROOT_PATH, 'app')
    //     }]
    // }
    // ,
    // plugins: [
    //   new HtmlwebpackPlugin({
    //     title: 'Kanban app'
    //   })
    // ]
};

if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devtool: 'source-map',
        module: {
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
