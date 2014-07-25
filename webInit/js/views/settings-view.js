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
    var SettingsView = BaseView.extend({
    menu: $('#menu'),
    //template: Handlebars.template('<div>hello world</div>'),

        initialize: function(options)
        {
            options = options || {};
        },
        render: function() {
            this.renderTemplate('settings', '#content');
        }
    }, {

    });
    // Our module now returns our view
    return SettingsView;
});