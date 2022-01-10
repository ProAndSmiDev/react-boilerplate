const path          = require('path');
const NODE_ENV      = process.env.NODE_ENV;
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target:       "node",
    mode:         NODE_ENV ? NODE_ENV : 'development',
    entry:        path.resolve(__dirname, '../server/server.js'),
    output:       {
        path:     path.resolve(__dirname, '../docs/server'),
        filename: "server.js",
    },
    resolve:      {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    externals:    [nodeExternals()],
    module:       {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use:  {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ]
                    },
                },
            },
        ],
    },
    optimization: {
        minimize: false,
    }
};
