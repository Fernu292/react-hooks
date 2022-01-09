const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js",".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            }, 
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
            inject: true
        })
    ],
    devServer: {
        static: {
            publicPath: path.join(__dirname, "dist")
        },
        port: 3000,
        compress: true,
        open: true 
    }
}