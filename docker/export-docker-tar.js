var shell = require("shelljs");

var DIR_NAME = "../foldername";

if (shell.test("-e", DIR_NAME)) {
  shell.rm("-r", DIR_NAME);
  shell.echo(`Removed ${DIR_NAME} old dir.`);
}

if (shell.mkdir(DIR_NAME).code === 0) {
  shell.cp("./docker-compose-run.yaml", DIR_NAME);
  shell.cp("./execute-container.sh", DIR_NAME);
}

if (shell.cd(DIR_NAME).code === 0) {
  shell.echo(`Created new ${DIR_NAME} dir.`);

  if (shell.exec("docker save server > server.tar").code === 0) {
    shell.echo("Generated server.tar.");
  }

  if (shell.exec("docker save frontend > frontend.tar").code === 0) {
    shell.echo("Generated frontend.tar.");
  }

  if (shell.exec("docker save fileserver > fileserver.tar").code === 0) {
    shell.echo("Generated fileserver.tar.");
  }
}

shell.exit(0);
