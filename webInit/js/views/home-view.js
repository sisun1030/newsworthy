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
    var HomeView = Backbone.View.extend({
    menu: $('#menu'),
    //template: Handlebars.template('<div>hello world</div>'),

    initialize: function(options)
    {
        options = options || {};
    },
    render: function(){
        // Using Underscore we can compile our template with data
        var data = {},
             self = this;
        //var template = template( );

        //var menuBar = this.template();
        // Append our compiled template to this Views "el"
        Handlebars.helpers.getTemplateAjax('menu.handlebars', function(source) {
            self.menu.append(source);
        });
       // this.menu.append( menuBar );
        }
    }, {

    });
    // Our module now returns our view
    return HomeView;
});