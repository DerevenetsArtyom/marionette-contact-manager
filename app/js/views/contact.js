ContactManager.Views.Contact = Marionette.View.extend({
    tagName: 'li',
    className: 'media col-md-6 col-lg-4',
    template: '#tpl-contact',

    triggers:{
        'click .delete-contract': 'delete:clicked',
        'click .edit-contract': 'edit:clicked'
    }
});
