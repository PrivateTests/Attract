const path = require('path');
const webpack = require('webpack-stream').webpack;

module.exports = {
    devtool: 'cheap-module-inline-source-map',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot-loader/webpack', 'babel-loader'],
            include: path.join(__dirname, '../../js'),
            exclude: /node_modules/
        },
            {test: /\.css$/, loader: "style-loader!css-loader"}]
    }
};
