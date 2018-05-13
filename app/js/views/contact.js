ContactManager.Views.Contact = Marionette.View.extend({
    tagName: 'li',
    className: 'media col-md-6 col-lg-4',
    template: '#tpl-contact',

    events: {
        'click .delete-contract': 'onClickDelete'
    },

    onClickDelete: function(e) {
        e.preventDefault();
        this.model.collection.remove(this.model);
    }
});
