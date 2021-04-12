const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: [/\.vert$/, /\.frag$/],
                use: "raw-loader",
            },
            {
                test: /\.(gif|png|jpe?g|svg|xml)$/i,
                use: "file-loader",
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "build"),
    },
    plugins: [
        new CleanWebpackPlugin({
            root: path.resolve(__dirname, "./"),
        }),
        new webpack.DefinePlugin({
            CANVAS_RENDERER: JSON.stringify(true),
            WEBGL_RENDERER: JSON.stringify(true),
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
        }),
    ],
};
