ContactManager.Views.ContactForm = Marionette.ItemView.extend({
    template: '#tpl-new-contact',

    events: {
        'submit .contract-form': 'onFormSubmit'
    },

    serializeData: function () {
        return _.extend(this.model.toJSON(), {
            isNew: this.model.isNew()
        })
    },
    

    onFormSubmit: function(e) {
        e.preventDefault();

        this.trigger('form:submitted', {
            name: this.$('.contact-name-input').val(),
            tel: this.$('.contact-tel-input').val(),
            email: this.$('.contact-email-input').val()
        });
    }
});
