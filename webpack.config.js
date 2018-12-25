const path = require("path");
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
    if (entries && typeof entries === "object") {
        for (var key in entries) {
            let name = key.replace(/\-/gi, "");
            str += `import ${name} from "./dist/${key}/index.js";\r\n export const ${tranformStr1(
                key
            )}=${name};\r`;
        }
    }
    fs.writeFileSync(path.join(rootPath, "./index.js"), str);
};

const readDir = function() {
    let names = fs.readdirSync(path.join(rootPath, "./lib"));
    let result = {};
    if (names && names.length > 0) {
        names.map(item => {
            result[item] = path.join(rootPath, `./lib/${item}/index.tsx`);
        });
    }
    generateIndex(result);
    return result;
};

module.exports = {
    mode: "development",
    entry: readDir(),
    resolve: {
        extensions: [".js", ".json", ".jsx", ".tsx", ".ts", ".less", ".css"]
    },
    externals: {
        React: "react"
    },
    output: {
        filename: "[name]/index.js",
        path: path.resolve(__dirname, "./dist"),
        libraryTarget: "commonjs2"
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
        new ExtractTextPlugin("./[name]/index.css"),
        new ExtractTextPlugin("./index.css")
    ]
};
