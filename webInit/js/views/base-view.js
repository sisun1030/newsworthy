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
    var BaseView = Backbone.View.extend({
    //template: Handlebars.template('<div>hello world</div>'),
        renderTemplate: function(source, selector, data)
        {
            var elem = $(selector),
                 self = this;
            data = data || {};
            Handlebars.helpers.getTemplateAjax(source, function(renderedElem) {
                elem.append(renderedElem(data));
            });
        }


    }, {
        NAME: 'BaseView'

    });
    // Our module now returns our view
    return BaseView;
});