const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const fs = require("fs");
const rootPath = path.join(__dirname, "./");

function tranformStr1(str) {
    var strArr = str.split("-");
    for (var i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1);
    }
    return strArr.join("");
}
const generateIndex = function(entries) {
    let str = "";
    let nameObj = {};
    if (entries && typeof entries === "object") {
        str += 'import jyearui from "./dist/index";\r\n';
        entries.map(item => {
            str += `export const ${tranformStr1(item)}=jyearui["${tranformStr1(
                item
            )}"];\r\n`;
        });
    }
    fs.writeFileSync(path.join(rootPath, "./index.js"), str);
};
const readDir = function() {
    let names = fs.readdirSync(path.join(rootPath, "./lib"));
    let result = {};
    let nameArr = [];
    if (names && names.length > 0) {
        names.map(item => {
            let isDir = fs
                .statSync(path.join(rootPath, `./lib/${item}`))
                .isDirectory();
            if (isDir) {
                result[item + "/index"] = path.join(
                    rootPath,
                    `./lib/${item}/index.tsx`
                );
                nameArr.push(item);
            } else {
                result[item.substr(0, item.lastIndexOf("."))] = path.join(
                    rootPath,
                    `./lib/${item}`
                );
            }
        });
    }
    generateIndex(nameArr);
    return result;
};

module.exports = {
    mode: "development",
    entry: readDir(),
    resolve: {
        extensions: [".js", ".json", ".jsx", ".tsx", ".ts", ".less", ".css"]
    },
    externals: {
        react: "react"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "./dist"),
        library: "jyearui",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.(tsx?|jsx?)$/,
                loader: ["babel-loader", "ts-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.css|less$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", "postcss-loader", "less-loader"]
                }),
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("./[name].css")
        //new ExtractTextPlugin("../index.css")
    ]
};
