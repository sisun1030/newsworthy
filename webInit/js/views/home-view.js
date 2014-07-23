// Filename: views/project/list
define([
        'jquery',
        'underscore',
        'views/base-view',
        'handlebars'
    ], function(
        $,
        _,
        BaseView,
        Handlebars
    ){
    var HomeView = BaseView.extend({
    menu: $('#menu'),
    //template: Handlebars.template('<div>hello world</div>'),

        initialize: function(options)
        {
            options = options || {};
        },
        render: function() {
            this.renderTemplate('menu', '#menu');
        }
    }, {

    });
    // Our module now returns our view
    return HomeView;
});