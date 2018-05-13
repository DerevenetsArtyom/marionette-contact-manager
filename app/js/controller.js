ContactManager.Controller = Marionette.Controller.extend({
    initialize: function(options) {
        this._contacts = options.contacts;
        this._router = options.router;
        this._mainRegion = options.mainRegion;
    },

    showContacts: function() {
        var contactsView = new ContactManager.Views.Contacts({
          collection: this._contacts
        });

        this.listenTo(contactsView, 'addContact:clicked', this.newContact);
        this.listenTo(contactsView, 'itemView:delete:clicked', function () {
            this._contacts.remove(contactsView.model)
        });

        ContactManager.mainRegion.show(contactsView);

        this._router.navigate('contacts');
    },

    newContact: function() {
        var newContactForm = new ContactManager.Views.ContactForm({
            model: new ContactManager.Models.Contact()
        });

        this.listenTo(newContactForm, 'form:submitted', function(attrs) {
            attrs.id = this._contacts.isEmpty() ? 1 : (_.max(this._contacts.pluck('id')) + 1);
            this._contacts.add(attrs);
            this._router.navigate('contacts');
            this.showContacts();
        });

        // navigate to contact was before 'this.showContacts'
        this.listenTo(newContactForm, 'form:canceled', this.showContacts);

        ContactManager.mainRegion.show(newContactForm);

        this._router.navigate('contacts/new');
    },

    editContact: function(id) {
        var contact = this._contacts.get(id),
            editContactForm;

        if (contact) {
            editContactForm = new ContactManager.Views.ContactForm({
                model: contact
            });

            this.listenTo(editContactForm, 'form:submitted', function(attrs) {
                contact.set(attrs);
                this._router.navigate('contacts', true);
            });

            ContactManager.mainRegion.show(editContactForm);

            this._router.navigate('contacts/edit/' + id);
        } else {
            this.showContacts();
        }
    }
});