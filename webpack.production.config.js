const path = require("path");
const { merge } = require("webpack-merge");
const dev = require("./webpack.development.config.js");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(dev, {
    mode: "production",
    output: {
        filename: "bundle.js",
    },
    devtool: false,
    performance: {
        maxEntrypointSize: 900000,
        maxAssetSize: 900000,
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false,
                    },
                },
            }),
        ],
    },
});

