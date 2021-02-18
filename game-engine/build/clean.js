const path = require("path");
const rimraf = require("rimraf");

[
    path.resolve(__dirname, "../lib"),
    path.resolve(__dirname, "../lib-esm"),
    path.resolve(__dirname, "_bundles")
].forEach(path => {
    rimraf(path, () => {
        console.log("\x1b[31m", `Removed folder ${path}`, "\x1b[0m");
    });
});