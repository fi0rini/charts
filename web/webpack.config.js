var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: __dirname + '/src/main.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: path.join(__dirname, 'src'),     loader:'babel-loader'},
            {test: /\.css$/,                        loader:'style!css'},
            {test: /\.jpe?g$|\.gif$|\.png$|\.wav$|\.mp3$/, loader: "file-loader" },
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file-loader" },
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "file-loader" },
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "file-loader" },
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "file-loader" },
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "file-loader" }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation failed
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map'

};
