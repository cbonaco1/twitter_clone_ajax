FollowToggle = require('./follow_toggle.js');

$(document).on('ready', function() {
  // alert("Doc is ready");
  var $followButtons = $("button.follow-toggle");
  // debugger
  $followButtons.each(function(_, el){
    new FollowToggle(el);
  });

});
