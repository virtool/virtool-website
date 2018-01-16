var path = require("path");
var HTMLPlugin = require("html-webpack-plugin");
var CleanPlugin = require("clean-webpack-plugin");

module.exports = {

    entry: ["babel-polyfill", "./main.js"],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: "babel-loader"
            }
        ]
    },

    output: {
        path: path.resolve(__dirname, "../database"),
        filename: "app.[hash:8].js"
    },

    plugins: [
        new HTMLPlugin({
            filename: "index.html",
            template: "index.html"
        }),

        new CleanPlugin([path.resolve(__dirname, "../database")], {
            verbose: true,
            allowExternal: true
        })
    ]
}