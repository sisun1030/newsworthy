// Filename: views/project/list
define([
        'jquery',
        'underscore',
        'views/base-view',
        'views/menu-view',
        'handlebars'
    ], function(
        $,
        _,
        BaseView,
        MenuView,
        Handlebars
    ){
    var HomeView = BaseView.extend({
    menu: $('#menu'),
    //template: Handlebars.template('<div>hello world</div>'),

        initialize: function(options)
        {
            options = options || {};
            this.menuView = new MenuView();
        },
        render: function() {
           // this.renderTemplate('menu', '#menu');
           this.menuView.render();
        }
    }, {

    });
    // Our module now returns our view
    return HomeView;
});