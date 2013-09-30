// This is a manifest file that'll be compiled into application.js,
// which will include all the files listed below.
//
// Any JavaScript/Coffee file within this directory,
// lib/assets/javascripts, vendor/assets/javascripts, or
// vendor/assets/javascripts of plugins, if any, can be referenced
// here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll
// appear at the bottom of the the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE
// PROCESSED, ANY BLANK LINE SHOULD GO AFTER THE REQUIRES BELOW.
//= require jquery
//= require jquery_ujs
//= require underscore
//= require jquery.serializeJSON
//= require_tree ./models
//= require_tree ./views
//= require_tree ../templates
//= require_tree .

(function(root) {
  var PT = root.PT = (root.PT || {});

  PT.initialize = function(CURRENT_USER_ID, callback) {

    var $content = $("#content");

    PT.PhotosListView.render($content);

    PT.PhotoFormView.render();
    // $( document ).ready(function() {
    //
    console.log(PT.Photo.fetchByUserId(1, function(result){
      console.log(result);
    }));


    $( document ).ready(function() {
      this.$el.find("form").on("submit", function(event) {
        event.preventDefault();
        /// json serialize the result

      })
    });


  }
})(this);