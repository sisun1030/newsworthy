// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home-view',
  'views/settings-view'
], function(
    $,
    _,
    Backbone,
    HomeView,
    SettingsView){
    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            'home': 'home',
            '': 'home',
            'members': 'members',
            'notifications': 'notifications',
            'settings': 'settings',
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
        app_router.on('route:members', function(){

            var homeView = new HomeView();
            homeView.render();

        });
        app_router.on('route:notifications', function(){

            var homeView = new HomeView();
            homeView.render();

        });
        app_router.on('route:settings', function(){

            var settingsView = new SettingsView();
            settingsView.render();

        });
        Backbone.history.start();
    };
    return {
    initialize: initialize
    };
});