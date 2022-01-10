const webpack = require('webpack');

const webpackConfig = require('../webpack.config');
const path          = require('path');
const nodemon       = require('nodemon');
const compiler      = webpack(webpackConfig);

compiler.run((err) => {
    if (err) {
        console.log('Compilation failed: ', err);
    }

    compiler.watch({}, (err) => {
        if (err) {
            console.log('Compilation failed: ', err);
        }

        console.log('Compilation was successfully');
    });

    nodemon({
        script: path.resolve(__dirname, '../docs/server/server.js'),
        watch:  [
            path.resolve(__dirname, '../docs/server'),
            path.resolve(__dirname, '../docs/client'),
        ]
    });
});