# Overview

This repo is created as a reference to create a NPM package to share reusable code or to create a feature module for a micro-frontend application.

This feature module is technically a React application so it will be having `App.tsx` and `index.tsx` that can be use like what you have in a React application.

## Tips 1
The exported routes in `src/index.routes.tsx` will have no any effect on the route tree in `App.tsx` so you can develop this feature module independently without the container/parent module.

## Tips 2
**Storybook** and **react cosmos** are two great tools for developing components. This reference will be using **react cosmos**.\
`src/cosmos.config.json` and `__fixtures__` are required for **react cosmos**.

## Tips 3
Sample `.babelrc`, `eslint` files, `package.json`, `.gitignore`, and `.prettierrc` are for reference purposes but they actually work for me.

## Tips 4
`tsconfig.json` will be used during normal compilation whereas `tsconfig.dist.json` will be used when generating the `dist` folder to be publish to NPM repository or Verdaccio (local NPM repository).

## Tips 5
The script `npm run generate-npm` to generate the NPM package is in `package.json` and the shell script is located in `shell` folder.

## Tips 6
`vsc-organize-imports` in `package.json` is an extension available in VS Code to organize imports. Install it!

# Done reading? 
Now head to microservies-setup/container-module to find out how to link modules together for development and more.
