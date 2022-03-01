var shell = require("shelljs");

var startTime = new Date();
shell.echo("Generating dist for npm......");
shell.exec("tsc -p tsconfig.dist.json");
shell.cp("-r", "./dist/src/feature_name/*", "./dist");
shell.rm("-r", "./dist/src");
var endTime = new Date();

shell.echo(`dist is generated, done. Took ${(endTime - startTime) / 60000} mins`);

shell.exit(0);
