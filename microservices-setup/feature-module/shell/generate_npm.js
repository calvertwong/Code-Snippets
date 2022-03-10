/**
 * Remember to copy non-Typescript items manually
 */

var shell = require("shelljs");

shell.echo(`Removing dist contents......(${new Date()})`);
shell.rm("-r", "dist/*");
shell.echo(`Generating dist for npm`);
shell.exec("tsc -p tsconfig.dist.json");

shell.exec("copyfiles -u 1 src/**/*.css dist/src");

shell.echo(`dist is generated, done......(${new Date()})`);

shell.exit(0);
