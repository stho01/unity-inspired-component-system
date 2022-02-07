const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/main.ts",
    output: {
        path: path.resolve(__dirname, "wwwroot/scripts"),
        filename: "game.js"
    },
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
        compress: true,
        port: 9000,
        static: {
            directory: path.join(__dirname, "wwwroot"),
        }
    }
}
