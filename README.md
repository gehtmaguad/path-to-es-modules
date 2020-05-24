# Path to ES Modules

- Repository for slides and examples of the talk "Path to ES Modules - A story of how encapsulation of JS Code evolved over time"

## Examples

- 01_namespace_pollution: shows how modules have been used in the early days, pushing everything onto the global namespace
- 02_wrapper_function: shows how to only push one variable and a wrapper function onto the global namespace
- 03_iifes: shows how to only push one variable onto the global namespace using an immediately invoked function expression
- 04_commonjs_nodejs: shows how CommonJS is used in NodeJS, using a default export
- 05_commonjs_browser:: shows how CommonJS is used in a browser using browserify to create a bundle
- 06_amd_module: shows how an AMD module is used in a browser using Require.js as loader
- 07_umd_module: shows how an UMD module is used in a browser using Require.js as loader and how an UMD module is used in NodeJS
- 08_es_modules_native_browser: shows how ES modules are used natively in a browser
- 09_es_modules_native_nodejs_mjs: shows how ES modules are used natively in NodeJS
- 10_es_modules_native_nodejs_mjs_cjs: shows how a CommonJS module is used within an ES module
