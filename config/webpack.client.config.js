const path              = require('path');
const NODE_ENV          = process.env.NODE_ENV;
const isDev             = NODE_ENV === 'development';

module.exports  = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../app/App.jsx'),
    output: {
        path: path.resolve(__dirname, '../docs/client'),
        filename: 'client.js',
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ['ts-loader'],
            },
        ],
    },
    devtool: (isDev) ? 'eval' : false,
};
