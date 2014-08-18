// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'router', // Request router.js
], function(
    $,
    _,
    Backbone,
    Router){
  var initialize = function(){

    Handlebars.registerHelper('getTemplateAjax', function(path, callback) {
        var source,
            template;

        $.ajax({
            url: 'templates/' + path + '.handlebars',
                success: function(data) {
                    source    = data;
                    template  = Handlebars.compile(source);

                    //execute the callback if passed
                    if (callback) callback(template);
            }
        });
    });
    Handlebars.registerHelper('if', function(conditional, options) {
        if(conditional) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    });

    Handlebars.registerHelper('if_eq', function(condOne, condTwo, options) {
        if(condOne === condTwo) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    });

    // Pass in our Router module and call it's initialize function
    Router.initialize();
  };

  return {
    initialize: initialize
  };
});