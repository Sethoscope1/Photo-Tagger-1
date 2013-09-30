(function (root) {


  // add click handler
  var PT = root.PT = (root.PT || {});

  var PhotosListView = PT.PhotosListView = function() {
    this.$el = $("<div>");
  };


  PhotosListView.showDetail = function(event) {

  };



  PhotosListView.render = function(content) {

    // first select div from page
    $el = content;

    // empty contents
    $el.empty();

    // make new empty div
    $ul = $("<ul>");

    _.each(PT.Photo.all, function(photo){
      $li = $("<li>");
      $li.text("");

      $a = $("<a>");

      // add links to new pages > detail view;
      $a.href(photo.url);

      // add data-id == photo id

      $li.data-id(photo.id);
      $ul.append($li);
      $ul.append($a);
    })

    $el.append($ul);
  };
})(this);