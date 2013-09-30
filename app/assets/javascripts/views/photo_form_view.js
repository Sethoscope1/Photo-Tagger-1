(function (root) {

  var PT = root.PT = (root.PT || {});

  var PhotoFormView = PT.PhotoFormView = function() {
    this.$el = $("<div>");
  };


  PhotoFormView.render = function() {
    var that = this;

    var templateData = JST["photo_form"];

    that.$el.html(templateData);

    return that.$el
  };
})(this);