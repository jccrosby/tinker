var webpack = require('webpack');
var path = require('path');

var APP_SRC_DIR = path.resolve(__dirname, 'src/client');

module.exports = {
    entry: APP_SRC_DIR + '/app.jsx',
    output: {
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                include: APP_SRC_DIR,
                exclude: ['node_modules']
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
}
