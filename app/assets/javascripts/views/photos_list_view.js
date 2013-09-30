(function(root) {

  var PT = root.PT = (root.PT || {});

  var PhotosListView = PT.PhotosListView = function() {
    this.$el = $("<div>");
  };


  PhotosListView.prototype.render = function() {
    $el = this.$el;
    $el.empty();

    $ul = $("<ul>");

    _.each(Photo.all, function(photo) {
      $ul.append("<li>", { value: photo.title});
    })

    $el.append($ul);

    return $el;
  };
})(this);