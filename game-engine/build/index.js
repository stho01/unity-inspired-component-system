const { exec } = require("child_process");
const path = require("path");
const cc = require("./console-colors");

function execute(cmd) {
    return new Promise((resolve, reject) => {
        exec(cmd, (err, stdout, stderr) => {
            if (err) {
                reject(`error: ${err.message}`);
                return;
            }
            if (stderr) {
                reject(`error: ${stderr}`);
                return;
            }
            console.log(stdout);
            resolve(stdout);
        })
    });
}
function printInfo(msg) {
    console.log(cc.fg.blue, `# ${msg} `.padEnd(150, "="), cc.reset);
    console.log()
}

async function build() {
    console.log();
    try {
        printInfo("Cleaning project");
        const cleanScript = path.resolve(__dirname, "./clean.js");
        await execute(`node ${cleanScript}`);
        printInfo("Done cleaning project");
        console.log();

        printInfo("Building project");
        await Promise.all([
            execute("tsc -b --verbose"),
            // execute("tsc -m es6 --outDir lib-esm"),
            // execute("webpack")
        ]);
        printInfo("Done building project");
    } catch (e) {
        console.log(cc.fg.red, e, cc.reset);
    }
}

build();


