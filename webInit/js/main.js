// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
    paths: {
        jquery: 'libs/jquery.min',
        underscore: 'libs/lodash.min',
        backbone: 'libs/backbone-min',
        handlebars: 'libs/handlebars-v1.3.0',
        templates: '../templates'
    },
   shim: {
           'handlebars': {
               exports: 'Handlebars'
           }
       }
});

require([
  // Load our app module and pass it to our definition function
  'app',

], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});