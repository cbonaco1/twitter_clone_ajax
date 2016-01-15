FollowToggle = require('./follow_toggle.js');
UsersSearch = require('./users_search.js');

$(document).on('ready', function() {
  var $followButtons = $("button.follow-toggle");
  $followButtons.each(function(_, el){
    new FollowToggle(el);
  });

  var $userSearches = $("nav.users-search");
  $userSearches.each(function(_, el){
    new UsersSearch(el);
  });

});
