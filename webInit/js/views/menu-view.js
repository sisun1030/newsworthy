// Filename: views/project/list
define([
        'jquery',
        'underscore',
        'models/menu-model',
        'views/base-view',
        'handlebars'
    ], function(
        $,
        _,
        MenuModel,
        BaseView,
        Handlebars
    ){
    var MenuView = BaseView.extend({
        menu: $('#menu'),

        initialize: function(options)
        {
            options = options || {};
            this.menuModel = new MenuModel();
            this.menuModel.currentRoute = Backbone.history.getHash();
        },
        render: function() {
            this.renderTemplate('menu', '#menu', this.menuModel);
        }
    }, {

    });
    // Our module now returns our view
    return MenuView;
});