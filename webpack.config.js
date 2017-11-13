const path = require("path");

module.exports = {
    entry: "./src/main.ts",
    output: {
        path: path.resolve(__dirname, "wwwroot/scripts"),
        filename: "game.js"
    },
    devtool: "source-map",
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
        contentBase: "./wwwroot",
        compress: true,
        port: 9000,
        publicPath: "/scripts/"
    }
}