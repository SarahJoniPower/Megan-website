const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    resolve: { extensions: [".ts", ".tsx", ".js", ".jsx"] },
    module: {
        rules: [{
            test: /\.[jt]sx?$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader", options: {
                    presets: [
                        ['@babel/preset-env', {
                            "targets": "defaults"
                        }],
                        '@babel/preset-react',
                        ['@babel/preset-typescript', {
                            "isTSX": true,
                            "allExtensions": true
                        }],
                    ]
                }
            }]
        }]
    },
    plugins: [new HtmlWebpackPlugin()],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot: true,
    },
}