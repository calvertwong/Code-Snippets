var shell = require("shelljs");

shell.echo(`Generating dist for server......(${new Date()})`);
shell.exec("tsc -p tsconfig.dist.json");
shell.cp("web.config", "dist/")

shell.echo(`dist is generated, done.(${new Date()})`);

shell.exit(0);
