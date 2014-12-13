/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
app.import('bower_components/bootstrap-material-design/dist/css/material.min.css');
app.import('bower_components/bootstrap-material-design/dist/css/ripples.min.css');
app.import('bower_components/bootstrap-material-design/dist/css/material-wfont.min.css');

app.import('bower_components/bootstrap-material-design/dist/js/material.js');
app.import('bower_components/bootstrap-material-design/dist/js/ripples.js');


var materialDesignFontFiles = pickFiles('bower_components/bootstrap-material-design/dist/fonts', {
  srcDir: '/',
  files: ['**/*.woff', '**/*.eot', '**/*.svg', '**/*.ttf'],
  destDir: '/fonts'
});


// Providing additional trees to the `toTree` method will result in those
// trees being merged in the final output.
module.exports = mergeTrees([app.toTree(), materialDesignFontFiles]);