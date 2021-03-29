#!/usr/bin/env node

/* eslint-disable no-console */

const fs = require('fs'); // filesystem

console.log('Init project...');

fs.appendFileSync('.eslintrc.js', 'This is .eslintrc file');

fs.appendFileSync('.env.sample', 'This is .env.sample file');

fs.appendFileSync('.eslintignore', 'This is .eslintignore file');

fs.appendFileSync('.prettierc.js', 'This is ..prettierc.js file');

fs.appendFileSync('.prettierignore', 'This is .prettierignore file');
