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

var devServerCommon = {
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
};

var startCommon = merge(common, devServerCommon);

if (TARGET === 'start1' || !TARGET) {
    // Test 1.  react-hot loader used, with full source maps generated.
    module.exports = merge(startCommon, {
        devtool: 'source-map',
        module: {
            // Note: don't include the same loader in multiple places, e.g putting babel under "common" and here.
            // Webpack will error out if you try this.
            loaders: [{
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                include: path.resolve(ROOT_PATH, 'app')
            }]
        }

    });
}

if (TARGET === 'start2' || !TARGET) {
    // Test 2.  react-hot not used, with full source maps generated (i.e. devtool set to "source-map".
    module.exports = merge(startCommon, {
        devtool: 'source-map',
        module: {
            // Note: don't include the same loader in multiple places, e.g putting babel under "common" and here.
            // Webpack will error out if you try this.
            loaders: [{
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: path.resolve(ROOT_PATH, 'app')
            }]
        }

    });
}

if (TARGET === 'start3' || !TARGET) {
    // Test 3.  react-hot loader used with only eval (i.e. transpiled source maps) generated
    module.exports = merge(startCommon, {
        devtool: 'eval',
        module: {
            // Note: don't include the same loader in multiple places, e.g putting babel under "common" and here.
            // Webpack will error out if you try this.
            loaders: [{
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                include: path.resolve(ROOT_PATH, 'app')
            }]
        }

    });
}

if (TARGET === 'start4' || !TARGET) {
    // Test 4.  react-hot not used, with eval-source-map source maps generated.
    module.exports = merge(startCommon, {
        devtool: 'eval-source-map',
        module: {
            // Note: don't include the same loader in multiple places, e.g putting babel under "common" and here.
            // Webpack will error out if you try this.
            loaders: [{
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                include: path.resolve(ROOT_PATH, 'app')
            }]
        }

    });
}


if (TARGET === 'startnoreact' || !TARGET) {
    // startnoreact.  No react at all.  
    module.exports = merge(devServerCommon, {
        entry: {
            app: [path.resolve(ROOT_PATH, 'app/appbasic.js')]
        },
        output: {
            path: path.resolve(ROOT_PATH, 'build'),
            filename: 'bundle.js'
        },
        devtool: "eval-source-map",
        module: {
            // Note: don't include the same loader in multiple places, e.g putting babel under "common" and here.
            // Webpack will error out if you try this.
            loaders: [{
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: path.resolve(ROOT_PATH, 'app')
            }]
        }

    });
}
