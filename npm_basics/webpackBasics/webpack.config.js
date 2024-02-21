let path = require('path');
let GLOBAL_NODE_PATH = 'C:/Users/yssk3/AppData/Roaming/npm/node_modules'
module.exports = {
    entry: [`${GLOBAL_NODE_PATH}/@babel/polyfill`, './src/app.js'],
    output: {
        path: path.resolve(__dirname, 'bundles'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                loader: `${GLOBAL_NODE_PATH}/babel-loader`,
                options: {
                        presets: [`${GLOBAL_NODE_PATH}/@babel/preset-env`]
                    }
                }
            }
        ]
    }
};