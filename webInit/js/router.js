// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home-view'
], function(
    $,
    _,
    Backbone,
    HomeView){
    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            'home': 'home',
            '/projects': 'showProjects',
            '/users': 'showUsers',

        }
    });

    var initialize = function(){
        var app_router = new AppRouter;

        app_router.on('route:home', function(){

            var homeView = new HomeView();
            homeView.render();

        });
        Backbone.history.start();
    };
    return {
    initialize: initialize
    };
});