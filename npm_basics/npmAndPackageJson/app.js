//? This terminal script, It asks you some questions and lets you create a package
//* npm init

//? This terminal script creates default package
//* npm init --yes

//? Okay but what does it look like a package (package.json file)
/*
{
  "name": "npmandpackagejson",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
*/ 

//? name: your package name (name value must be unique)
//? version: your package version
//? description: your package description (What can this package do?)
//? main: main .js file of your package
//? scripts object: your shortcut terminal scripts
//? keywords: your package keywords [math, physics]
//? autor: who made this package
//? license: your package license (default ISC)

//? package installation
//* npm i package-name || npm install package-name

//? package removing
//* npm r package-name || npm remove package-name

//? package installation and removing in global node modules file
//* install: npm i -g package-name (-g means global)
//* remove: npm r -g package-name (-g means global)

//? package installation as development dependency
//* npm i package-name --save-dev

//? script calling code
//* npm run script-name 

const is = require('is')
console.log(is.number(24))