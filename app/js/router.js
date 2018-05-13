ContactManager.Router = Marionette.AppRouter.extend({
    routes: {
        '': 'home'
    },

    home: function() {
      this._router.navigate('contacts', {
          trigger: true,
        replace: true
        });
    }
});
