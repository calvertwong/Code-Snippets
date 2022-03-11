# Overview

This repo **(TypeScript)** is created as a reference to create a NPM package to share reusable code or to create a feature module for a micro-frontend application.

This feature module is technically a React application so it will be having `App.tsx` and `index.tsx` that can be use like what you have in a React application. This repo is not a complete React app but is a repository for me to store all important files and code for such setup.

To integrate this feature module to the host app, simply add the `App` of this feature module to the host's react router tree, done. The `App` can be found in `entryFile.ts` or `index.js` in `dist`. It can also be lazily loaded like `const featureApp = lazy(() => import("@orgName/featureName"))` in the host app. 

# Take note
Two `.npmrc` files must be setup, one in local machine and the other one in this repo in order to publish and download NPM package if the package is published internally to Verdaccio or privately in GitHub etc.

**Also**, images or anything that is not a typescript file have to be copied over to `dist` folder. Images will not be compiled hence they won't appear in `dist` folder by default. `cp` command if what you need and the script is available in `shell/generate_npm.js`.

## Tips 1
The react router tree and react redux is being setup like in `index.tsx` and `App.tsx` to allow `App` being imported by the host app. The host app will have its own `<BrowserRouter>` or similar and it cannot accept a second `<BrwoserRouter>` from the feature module. Hence, I have moved the `<BrowserRouter>` to `index.tsx` to enable the feature module being developed independently without the host app. 

## Tips 1 cont'd
React redux config in `App.tsx` is as such because to enable react redux to work as expected when it is being used as feature module. Moving the redux config to `index.tsx` will not work. 

## Tips 2
**Storybook** and **react cosmos** are two great tools for developing components. This reference will be using **react cosmos**.\
`src/cosmos.config.json` and `__fixtures__` are required for **react cosmos**.

## Tips 3
Sample `.babelrc`, `eslint` files, `package.json`, `.gitignore`, and `.prettierrc` are for reference purposes but they are working for me.

## Tips 4
`tsconfig.json` will be used during normal compilation whereas `tsconfig.dist.json` will be used when generating the `dist` folder to be publish to NPM repository or Verdaccio (local NPM repository).

## Tips 5
The script `npm run generate-npm` to generate the NPM package is in `package.json` and the shell script is located in `shell` folder.

## Tips 6
[`vsc-organize-imports`](https://marketplace.visualstudio.com/items?itemName=alfnielsen.vsc-organize-imports) in `package.json` is an extension available in VS Code to organize imports. Install it!

## Tips 7
If the `dist` folder does not have the new changes, remove `dist` folder and run `npm run generate-npm` again. This happens when new file is being created or after removing a file. (This should not happen because the current script will remove everything from `dist` on file save)

## Tips 8
It is troublesome to execute `npm run generate-npm` manually every time. Download a VS Code extension called [`Run on Save`](https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave). In VS Code's settings.json, add the below code to execute the command on save. 
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
