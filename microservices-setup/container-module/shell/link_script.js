/**
 * This script is to connect modules to this parent container for consumption in development environment
 * Production build will work too if it is being build with locally linked modules
 */

var shell = require("shelljs");

var SAMPLE_MODULE_ONE = "../sample-module-one";
var SAMPLE_MODULE_TWO = "../sample-module-two";

/**
* This array consists of dependencies that feature modules shall being using from the container's because React doesn't allow a duplicate of some dependencies
*/
var intermodules = ["react", "react-dom", "react-router", "react-router-dom"];

var SUCCESS = 0;

var successArray = new Array();

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
 * print in red
 */
function errorHandler(errorText) {
  shell.echo(`\x1b[31m${errorText}\n\x1b[0m`);
  shell.exit(1);
}

/**
 * Check if third party modules such as react, react-dom exist in feature module and link them to this project's same third party modules to avoid conflict.
 * Do npm install
 */
function linkInterModules(moduleName, moduleDir, module) {
  if (shell.test("-e", `${moduleDir}/node_modules/${module}`)) {
    printSuccess(`\n***** ${moduleName}'s ${module} linking to container's starts *****`);
    if (shell.exec(`npm i`).code === SUCCESS) {
      printSuccess(`${moduleName} npm install is completed. Success!`);
      successArray.push(`${moduleName} npm install success!`);
    } else {
      errorHandler(`${moduleName} npm install failed!`);
    }
    
    if (shell.exec(`npm link ${CONTAINER_MODULE}/node_modules/${module}`).code === SUCCESS) {
      printSuccess(`${moduleName} is linked to container's ${module}. Success!`);
      successArray.push(`Link ${moduleName}'s ${module} to container's success!`);
    } else {
      errorHandler(`${moduleName}'s ${module} linking to container's failed!`);
    }
  }
}

function linkModule(moduleName, moduleDir, packageName) {
  printBlueBG(`Link ${moduleName} begins`);
  /**
   * Check if a feature module exists
   */
  if (shell.test("-e", moduleDir)) {
    printSuccess(`Found ${moduleDir}, linking ${moduleName}......`);
    /**
     * Start linking to feature module
     */
    if (shell.cd(moduleDir).code === SUCCESS) {
      /**
       * Create a symlink in global node_modules (code executed in feature folder)
       */
      if (shell.exec("npm link").code === SUCCESS) {
        /**
         * Read comments provided to this function
         */
        for (var i = 0; i < intermodules.length; i++) {
          linkInterModules(moduleName, moduleDir, intermodules[i]);
        }
        /**
         * Link feature module from this project
         */
        if (shell.cd(CONTAINER_MODULE).code === SUCCESS) {
          if (shell.exec(`npm link ${packageName} --save`).code === SUCCESS) {
            printSuccess(`Link ${moduleName} successful.`);
            successArray.push(`Link ${moduleName} success!\n`);
          } else {
            errorHandler(`Link ${moduleName} fail! Current directory: ${shell.pwd()}`);
          }
        } else {
          errorHandler(`Error cd ${CONTAINER_MODULE}. Current directory: ${shell.pwd()}`);
        }
      } else {
        errorHandler(`Error npm link. CurrentDirectory ${shell.pwd()}`);
      }
    } else {
      errorHandler(`Error cd ${moduleDir}. Current directory: ${shell.pwd()}`);
    }
  } else {
    errorHandler(`${moduleDir}: NOT FOUND. Current directory: ${shell.pwd()}`);
  }
  printBlueBG(`Link ${moduleName} ends`);
}

//======================= Add code here only (start) =======================
var startTime = new Date();
// @orgName/moduleOne comes from the "name" property in the package.json of the feature module
linkModule("module one", SAMPLE_MODULE_ONE, "@orgName/moduleOne");
linkModule("module two", SAMPLE_MODULE_TWO, "@orgName/moduleTwo");
var endTime = new Date();
//======================= Add code here only (end) =======================

shell.echo("===============================");
shell.echo("Modules linking status report:");
shell.echo("===============================");

for (var i = 0; i < successArray.length; i++) {
  printSuccess(successArray[i]);
}

printSuccess(`Took ${(endTime - startTime) / 60000} mins`);
