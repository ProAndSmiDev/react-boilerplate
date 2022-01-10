const path              = require('path');
const NODE_ENV          = process.env.NODE_ENV;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isDev             = NODE_ENV === 'development';

module.exports  = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, 'app/App.jsx'),
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ['ts-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, 'app/static/index.html')})
    ],
    devServer: {
        port: 8080,
        open: true,
        hot: isDev,
        static: {
            directory: path.resolve(__dirname, 'app/static'),
        },
    },
    devtool: (isDev) ? 'eval' : false,
};
