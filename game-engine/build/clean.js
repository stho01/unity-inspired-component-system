const path = require("path");
const rimraf = require("rimraf");

const paths = [
    path.resolve(__dirname, "../lib"),
    path.resolve(__dirname, "../lib-esm"),
    path.resolve(__dirname, "_bundles")
].forEach(path => {
    rimraf(path, () => {
        console.log(`Removed folder ${path}`);
    });
});