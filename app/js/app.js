var ContactManager = Marionette.Application({
    Models: {},
    Collections: {},
    Views: {}
});

// create first and main region for application
ContactManager.addRegions({
    mainRegion: '.main-container'
});

// create initializer and prepare data, router and controller
ContactManager.addInitializer(function(data) {
    var contacts = new ContactManager.Collections.Contacts(data.contacts);
    var router = new ContactManager.Router();
    var controller = new ContactManager.Controller({
        contacts: contacts,
        router: router,
        mainRegion: this.mainRegion
    });

    router.processAppRoutes(controller, {
        'contacts': 'showContacts',
        'contacts/new': 'newContact',
        'contacts/edit/:id': 'editContact'
    });
});

// start history after app initialization
ContactManager.on('initialize:after', function (options) {
    if (Backbone.history){
        Backbone.history.start();
    }
});
