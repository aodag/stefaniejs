describe("app", function() {
  it("views", function() {
    var model = new app.MainModel();
    var mainView = new app.MainView({model: model});
    mainView.render();
    expect(mainView.$el.find("div").text()).to.equal('stefanie');
  });
});
