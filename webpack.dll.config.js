const path = require("path");
const fs = require("fs");
const webpack = require("webpack");

var rootPath = path.join(__dirname, "./lib");
var webpackDll = {
    mode: "production",
    resolve: {
        extensions: [".js", ".jsx"]
    },
    entry: {
        manifest: ["react"]
    },
    module: {
        strictExportPresence: true
    },
    output: {
        path: path.join(__dirname, "/dll/manifest/"),
        filename: "[name].[chunkhash:9].dll.js",
        library: "manifest"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "dll/manifest", "manifest.json"),
            context: path.join(__dirname, "./dist"),
            name: "manifest"
        })
    ]
};
module.exports = webpackDll;
