# Overview

This repo **(TypeScript)** is created as a reference to setup a container to consume and develop feature modules for a micro-frontend application.

# Take note

If this repo is going to consume your own private npm modules, two .npmrc files must be setup, one in local machine and the other one in this repo in order to download the NPM modules. (https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)

The private NPM modules can be hosted on GitHub or locally in Verdaccio.

# How to start developing after setup

- Execute `npm run link` to start linking local modules and dependencies
- `npm start`
- Done. You don't need to do `npm install` and `npm link` in each feature modules, the link script here will do all that for you. Add or remove some module info as needed to the link and unlink script when a new module is added or removed, it should be rather simple and you just need to add or remove 2 lines of code. 

# How to remove all local modules and dependencies symlinks

- Execute `npm run unlink`

# More info

Once `npm run link` is done executing, changes on the local feature modules will be reflected at the container application almost immediately. 
The feature-module repo generates a `dist` folder and the contents in the `dist` folder is what this container is looking for.
In other words, the dist folder in the feature modules must exist or the container will show an error.
The dist folder must be re-generated when there is a new change to the code. If new changes are not reflecting in `dist` folder, simply remove the `dist` folder and re-generate the folder again..
**README** in feature-module repository has some useful tips that can be applied to this container as well, please read that. 

The production build that is generated here can be used too after executing `npm run link`. Tested and hosted on IIS Manager.

# IIS Manager
IIS Manager requires a web.config file, current file may not be a good one but it works. (I am new to IIS Manager)

# Done reading?
Now head to [microservices-setup/feature-module](https://github.com/calvertwong/TS-generic-code/tree/microservices/microservices-setup/feature-module) to find out how to start developing feature modules for this container and more/


