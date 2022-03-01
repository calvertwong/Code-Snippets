# Overview

This repo is created as a reference to create a NPM package to share reusable code or to create a feature module for a micro-frontend application.

This feature module is technically a React application so it will be having `App.tsx` and `index.tsx` that can be use like what you have in a React application.

# Take note
Two `.npmrc` files must be setup, one in local machine and the other one in this repo in order to publish and download NPM package

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
`[vsc-organize-imports](https://marketplace.visualstudio.com/items?itemName=alfnielsen.vsc-organize-imports)` in `package.json` is an extension available in VS Code to organize imports. Install it!

## Tips 7
If the `dist` folder does not have the new changes, remove `dist` folder and run `npm run generate-npm` again. This happens when new file is being created or after removing a file.

# Tips 8
It is troublesome to execute `npm run generate-npm` manually every time. Download a VS Code extension called `[Run on Save](https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave)`. In VS Code's settings.json, add the below code to execute the command on save. 
```
"emeraldwalk.runonsave": {
    "commands": [
        {
            "match": ".*",
            "isAsync": true,
            "cmd": "npm run generate-npm"
        }
    ]
}
```

# Done reading? 
Now head to [microservices-setup/container-module](https://github.com/calvertwong/TS-generic-code/tree/microservices/microservices-setup/container-module) to find out how to link modules together for development and more.
