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
        renderTemplate: function(source, selector)
        {
            var elem = $(selector),
                 self = this;
            Handlebars.helpers.getTemplateAjax(source, function(renderedElem) {
                elem.append(renderedElem);
            });
        }


    }, {
        NAME: 'BaseView'

    });
    // Our module now returns our view
    return BaseView;
});