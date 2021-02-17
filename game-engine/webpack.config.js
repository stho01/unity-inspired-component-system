const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/engine/Game.ts",
    output: {
        path: path.resolve(__dirname, "_bundles"),
        filename: "game-engine.js",
        libraryTarget: "umd",
        library: "GameEngine",
        umdNamedDefine: true
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
    }
}
