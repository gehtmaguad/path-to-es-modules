# modules in JS and NodeJS

* slides from the meetup talk are in the root of the project

## examples
* 01_namespace_pollution: shows how modules have been used in the early days, pushing everything onto the global namespace
* 02_wrapper_function: shows how to only push one variable and a wrapper function onto the global namespace
* 03_iifes: shows how to only push one variable onto the global namespace using an immediately invoked function expression
* 04_commonjs_default_export: shows how CommonJS is used in NodeJS, using a default export
* 05_es_modules_native_browser: shows how ES modules are used within modern browsers, using named exports
* 06_es_modules_transpiled_to_commonjs: shows how ES modules are used to write modules, but are then transpiled to CommonJS to be used by NodeJS
* 07_es_modules_transpiled_to_amd: shows how ES modules are used to write modules, but are then transpiled to AMD to be used in the Browser using require.js
* 08_es_modules_transpiled_to_umd: shows how ES modules are used to write modules, but are then transpiled to UMD to be used either by NodeJS or in the Browser using require.js
* 09_es_modules_native_nodejs_mjs: shows how ES modules are used natively in NodeJS
* 10_es_modules_native_nodejs_mjs_cjs: shows how a CommonJS module ca be used within an ES module
