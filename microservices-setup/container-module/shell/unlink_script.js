var shell = require("shelljs");

var SAMPLE_MODULE_ONE = "../sample-module-one";
var SAMPLE_MODULE_TWO = "../sample-module-two";

var intermodules = ["react", "react-dom", "react-router", "react-router-dom"];

var SUCCESS = 0;

var successArray = new Array();
var warningArray = new Array();
var errorArray = new Array();

/**
 * print in blue background
 */
function printBlueBG(headerText) {
  shell.echo(`\n\x1b[44m****** ${headerText} ******\x1b[0m\n`);
}

/**
 * print in green
 */
function printSuccess(successText) {
  shell.echo(`\x1b[32m${successText}\x1b[0m`);
}

/**
 * print in yellow
 */
function printWarning(warningText) {
  shell.echo(`\x1b[33m${warningText}\x1b[0m`);
}

/**
 * print in red
 */
function printError(errorText) {
  shell.echo(`\x1b[31m${errorText}\n\x1b[0m`);
}

function errorHandler(errorText) {
  printError(errorText);
  shell.exit(1);
}

/**
 * Unlink third party modules such as react, react-dom from container's
 */
function unlinkInterModules(moduleName, moduleDir, module) {
  if (shell.test("-e", `${moduleDir}/node_modules/${module}`)) {
    printSuccess(`***** ${moduleName}'s ${module} unlinking from container's starts *****`);
    if (shell.cd(moduleDir).code === SUCCESS) {
      if (shell.exec(`npm unlink ${CONTAINER_MODULE}/node_modules/${module}`).code === SUCCESS) {
        printSuccess(`${moduleName}'s ${module} unlinked from container.\n`);
        successArray.push(`Unlink ${moduleName}'s ${module} from container success!`);
      } else {
        errorHandler(`Error unlink ${moduleName} ${module} from container. Current directory: ${shell.pwd()}`);
      }
      shell.cd(CONTAINER_MODULE);
    }
  }
}

function unlinkModule(moduleName, moduleDir, packageName) {
  printBlueBG(`Unlink ${moduleName} begins`);
  /**
   * Check if a feature module is linked to this project
   */
  if (shell.test("-d", `./node_modules/${packageName}`)) {
    printSuccess(`Found ${packageName} in node modules, unlinking......`);
    /**
     * Unlink third party modules such as react, react dom
     */
    for (var i = 0; i < intermodules.length; i++) {
      unlinkInterModules(moduleName, moduleDir, intermodules[i]);
    }
    /**
     * Unlink and remove feature modules from this project
     */
    if (shell.exec(`npm unlink ${packageName} --save`).code === SUCCESS) {
      printSuccess(`Successful unlink ${packageName} from local node_modules.`);
      successArray.push(`Unlink ${moduleName} from project success!`);
      /**
       * Unlink and remove feature modules from global node_modules
       */
      if (shell.exec(`npm unlink ${packageName} -g`).code === SUCCESS) {
        printSuccess(`Successful unlink ${packageName} from global node_modules.`);
        successArray.push(`Unlink ${moduleName} from global node_modules success!\n`);
        successArray.push(`Unlink ${moduleName} success!`);
      } else {
        errorHandler(`Error unlink ${packageName} from global node_modules. Current directory: ${shell.pwd()}`);
      }
    } else {
      errorHandler(`Error unlink ${packageName} from local node_modules. Current directory: ${shell.pwd()}`);
    }
  } else {
    printWarning(`${packageName} NOT FOUND in node modules, skipping......`);
    warningArray.push(`${packageName} NOT FOUND in node_modules, skipped.\n`);
  }
  printBlueBG(`Unlink ${moduleName} ends`);
}

//======================= Add code here only (start) =======================
var startTime = new Date();
unlinkModule("module tne", SAMPLE_MODULE_ONE, "@orgName/moduleOne");
unlinkModule("module two", SAMPLE_MODULE_TWO, "@orgName/moduleTwo");
var endTime = new Date();
//======================= Add code here only (end) =======================

shell.echo("==================================");
shell.echo("Modules unlinking status report:");
shell.echo("==================================");

for (var i = 0; i < successArray.length; i++) {
  printSuccess(successArray[i]);
}

for (var i = 0; i < warningArray.length; i++) {
  printWarning(warningArray[i]);
}

for (var i = 0; i < errorArray.length; i++) {
  printError(errorArray[i]);
}

printSuccess(`Took ${(endTime - startTime) / 60000} mins`);
