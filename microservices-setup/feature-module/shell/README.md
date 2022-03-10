# What is this
A script that executes commands to generate a `dist` folder that can be used as an external module.

# Required NPM packages
- **shelljs**
  - To write shell script in js
- **copyfiles**
  - Copy non-TypeScript items

# Execution steps
1) Remove contents in `dist`
    - Remove contents of `dist` can prevent the linked container or modules through `npm link` from yelling when the `dist` is removed
    - The removal of contents in `dist` is neccessary to ensure the updated contents are accurate because:
      - New files might not be added to `dist`
      - Deleted files might remain in `dist`

2) Start compiling
3) Copy all `*.css` files to `dist`
4) Done

# Take note
Non-TypeScript items such as `images`, `*.css`, `*.bat` have to be manually copied over to `dist`. Refer to the line of code that copies in the script.
