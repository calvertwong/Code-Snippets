# What is this
A script that executes commands to generate a `dist` folder that can be used as an external module. When `npm publish` is executed, `dist` folder will be pushed to the NPM repository only.

# Required NPM packages
- **shelljs**
  - To write shell script in js
- **copyfiles**
  - Copy non-TypeScript items

# Execution steps
1) Remove contents in `dist`
2) Start compiling
3) Reorganize compiled file structure
4) Copy all `*.css` files to `dist`
5) Remove unused file and rename some files
6) Done

# What I have learnt
- Removing the entire `dist` folder will crash the container or linked modules that executed `npm start`. The host of this module will yell when `dist`can no longer be detected upon deletion.
  - Resolution: remove `dist` contents only  
- The removal of contents in `dist` is neccessary to ensure the updated contents are new and accurate because:
  - New files might not be added to `dist`
  - Deleted files might remain in `dist`

# Take note
- Non-TypeScript items such as `images`, `*.css`, `*.bat` have to be manually copied over to `dist`. Refer to the line of code that copies in the script.
- `entryFile.js` and `entryFile.d.ts` are the entry point of this module and will be renamed to `index.js` and `index.d.ts` so that the host can import this module like `import App from "@orgName/featureModule"`
- The name `entryFile` is used because `index` cannot be used in `src`. The name `index` will conflict with `index.tsx` and the app will render a blank page only.
