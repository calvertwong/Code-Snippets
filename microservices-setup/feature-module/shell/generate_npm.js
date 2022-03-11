/**
 * Remember to copy non-Typescript items manually
 */
var shell = require("shelljs");

var SUCCESS = 0;

shell.echo(`Removing dist contents......(${new Date()})`);
shell.rm("-r", "dist/*");
shell.echo(`Generating dist for npm`);
if (shell.exec("tsc -p tsconfig.dist.json").code == SUCCESS) {
  shell.echo(`dist is generated`);
  shell.echo(`Reorganizing...`);

  shell.cp("-r", "dist/src/*", "dist");
  shell.rm("-r", "dist/src");

  shell.exec("copyfiles -u 1 src/**/*.css dist");
  shell.rm("dist/index.css");

  shell.mv("dist/package.dist.json", "dist/package.json");
  shell.mv("dist/entryFile.js", "dist/index.js");
  shell.mv("dist/entryFile.d.ts", "dist/index.d.ts");

  shell.echo(`Done......(${new Date()})`);
} else {
  shell.echo("Failed to execute tsc!");
}

shell.exit(0);
