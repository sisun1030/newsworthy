// Filename: views/project/list
define([
        'jquery',
        'underscore',
        'backbone',
        'handlebars'
    ], function(
        $,
        _,
        Backbone,
        Handlebars
    ){
    var MenuModel = Backbone.Model.extend({
        menuItems: [
            {
                name: 'Home',
                route: 'home'
            },
            {
                name: 'Members',
                route: 'members'
            },
            {
                name: 'Notifications',
                route: 'notifications'
            }


        ]
    }, {
        NAME: 'MenuModel'

    });
    // Our module now returns our view
    return MenuModel;
});