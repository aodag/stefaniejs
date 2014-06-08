app = this.app = this.app || {}

app.MainView = Backbone.Marionette.ItemView.extend {
    template: app.templates.main
};

app.MainModel = Backbone.Model.extend {
    defaults: {
      name: "stefanie"
    }
}
