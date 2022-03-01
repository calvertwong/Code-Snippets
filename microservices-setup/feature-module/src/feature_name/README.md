**Read this**

This directory will be the starting point of the npm package once the command to generate npm package is executed.
`tsconfig.dist.json` will be sed to tell the compiler what to compile to the `dist` folder which will be generated later.

If you understand what is going in the `generate_npm.js` script and `tsconfig.dist.json`, you will understand why the `dist` folder will look like:

dist\
   |-- components\feature_name
   |&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;|-- GenericText.d.ts\
   |&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;|-- GenericText.js\
   |&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;|-- index.d.ts\
   |&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;|-- index.js\
   |-- pages\
   |&emsp;&emsp;&emsp;|-- SamplePage.d.ts\
   |&emsp;&emsp;&emsp;|-- SamplePage.js\
   |&emsp;&emsp;&emsp;|-- index.d.ts\
   |&emsp;&emsp;&emsp;|-- index.js\
   |-- index.d.ts `(typings of this NPM package)`\
   |-- index.js `(entry point of this NPM package)`\
   |-- index.routes.d.ts\
   |-- index.routes.js\
   |-- package.json
   
`index.routes.ts` is exporting the available routes and to be consumed by importing routes to the container/parent's route tree.
