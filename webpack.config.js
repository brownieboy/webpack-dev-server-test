var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');

var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);

var common = {
    entry: {
        app: [path.resolve(ROOT_PATH, 'app/app.jsx')]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loaders: ['babel'],
        }]
    }
};


if (TARGET === 'build') {
    module.exports = merge(common, {
        devtool: "source-map"
        // plugins: [
        //     new HtmlwebpackPlugin({
        //         title: 'Webpack-dev-server test',
        //         template: 'app/index.html',
        //         inject: "body"
        //     })
        // ]
    });
}


if (TARGET === 'dev') {
    module.exports = merge(common, {
        entry: {
            app: ['webpack/hot/dev-server', path.resolve(ROOT_PATH, 'app/app')]
        },
        devtool: 'source-map',
        devServer: {
            colors: true,
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin() // Needs to be here, even with devServer.hot set to true
        ]
    });
}
