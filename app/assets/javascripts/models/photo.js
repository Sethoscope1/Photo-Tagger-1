(function (root) {

  var PT = root.PT = (root.PT || {});

  var Photo = PT.Photo = function (data) {
    this.attributes = _.extend({}, data);
  }

  Photo.all = [];

  Photo.prototype.create = function (callback) {
    var that = this;

    $.ajax({
      url: that.get("action"),
      type: "POST",
      data: that.attributes,
      success: function (response) {
        _(that).extend(response);
        callback(that);
      }
    })
  };

  Photo.fetchByUserId = function (userId, callback) {

    var $that = $(this);
    var photos = [];
    // $.ajax({
   //    // Needs Callback?
   //    url: 'api/users/' + userID + '/photos',
   //    type: 'GET',
   //    success: function(photos) {
   //      Photo.all.push(
   //        _.map(photos, function(photo) {
   //        new Photo(photo);
   //      }))
   //      return Photo.all;
   //    };
   //  });


    $.ajax({
      url: 'api/users/' + userId + '/photos',
      type: "GET",
      success: function (photoPojos) {
        Photo.all.push(function() {
          _.map(photos, function(photo) {
            new Photo(photo);
          })
          // return _.map(photoPojos), function(photoPojo) { callback(photoPojo) }
        })
      }
    });
    console.log(photos);
    return photos;
  };
})(this);