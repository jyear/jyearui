const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");
const rootPath = path.join(__dirname, "./");
const os = require("os");
function getIPAdress() {
    var interfaces = os.networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (
                alias.family === "IPv4" &&
                alias.address !== "127.0.0.1" &&
                !alias.internal
            ) {
                return alias.address;
            }
        }
    }
}

module.exports = {
    mode: "development",
    entry: {
        app: path.join(__dirname, "./src/index.tsx")
    },
    output: {
        filename: "[name]/index.js",
        path: path.resolve(__dirname, "./dev")
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".tsx", ".ts", ".less", ".css"]
    },
    devServer: {
        contentBase: path.join(__dirname, "../dev"),
        historyApiFallback: false,
        host: getIPAdress(),
        port: 8112,
        open: true,
        inline: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: {
                    loader: "underscore-template-loader"
                }
            },
            {
                test: /\.(tsx|jsx)?$/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "ts-loader"
                    }
                ],
                include: /src/
            },
            {
                test: /\.css|less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "postcss-loader", "less-loader"]
                }),
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("./[name]/index.css"),
        new HtmlWebpackPlugin({
            template: path.resolve(rootPath, "./public/index.html"),
            minify: {
                collapseWhitespace: false //折叠空白区域 也就是压缩代码
            },
            // favicon: path.join(__dirname, "../public/favicon.ico"),
            hash: false
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
