(function (root) {

  var PT = root.PT = (root.PT || {});

  var Photo = PT.Photo = function (data) {
    this.attributes = _.extend({}, data);
  }

  Photo.all = [];

  Photo._events = {
    render: add(),
  };

  Photo.on(eventName, callback) {

    //What? This is supposed ot map events to callbacks
    this._events.eventName.push(callback);
  };

  Photo.trigger(eventName) {
    _.each(this._events(eventName), function(callback) {
      // What am I calling this on?
      callback.call(this?);
    });
  };

  Photo.prototype.create = function (callback) {
    var that = this;
    //trigger add event?
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
    var allPics = Photo.all;
    var $that = $(this);

    // Needs Callback?

    $.ajax({
      url: 'api/users/' + userId + '/photos',
      type: "GET",
      success: function (album) {
        _.each(album, function(photoInfo){
          allPics.push(photoInfo);
        })
        _.map(allPics, function(pic) {
          _.extend(new Photo, pic);
        })
        // console.log(allPics);

        callback(allPics);

        // return allPics;
      }

    });
  };
})(this);