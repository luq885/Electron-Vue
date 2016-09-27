const webpack = require('webpack');
// const path = require('path');

module.exports = {
    context: __dirname + '/src',
    entry: [
        './index.js'
    ],
    output: {
        path: __dirname + '/builds/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel', // 'babel-loader' is also a valid name to reference
                query: {
                    presets: ['es2015']
                }
            },
        ]
    },
    node: {
        fs: 'empty'
    },
    target: 'electron',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
};
