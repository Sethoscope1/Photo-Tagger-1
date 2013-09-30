(function (root) {

  var PT = root.PT = (root.PT || {});

  var PhotoDetailView = PT.PhotoDetailVies = function (photo) {
    this.$el = $("<div>");
    this.photo = photo;
  };


  PhotoDetailView.render = function() {
    var $h1 = $("<h1>");
    var $img = $("img");

    $img.on('click', function() {
      //render tagselectview???
    });


    //figure out JST templates...


  };







})(this);