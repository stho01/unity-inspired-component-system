const path = require("path");
const rimraf = require("rimraf");
const cc = require("./console-colors");
const fs = require("fs");

[
    //path.resolve(__dirname, "../lib"),
    path.resolve(__dirname, "../dist"),
    //path.resolve(__dirname, "_bundles")
].forEach(path => {
    const timeStamp = new Date(Date.now()).toLocaleTimeString();

    if (fs.existsSync(path)) {
        rimraf(path, () => {
            console.log(cc.fg.yellow, `${timeStamp} - Removed folder ${path}`, cc.reset);
        });
    } else {
        console.log(`${timeStamp} - Ignoring ${path} - folder not found`);
    }
});
