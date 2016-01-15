FollowToggle = require('./follow_toggle.js');
UsersSearch = require('./users_search.js');
TweetCompose = require('./tweet_compose.js');

$(document).on('ready', function() {
  var $followButtons = $("button.follow-toggle");
  $followButtons.each(function(_, el){
    new FollowToggle(el);
  });

  var $userSearches = $("nav.users-search");
  $userSearches.each(function(_, el){
    new UsersSearch(el);
  });

  var $tweetForms = $("form.tweet-compose");
  $tweetForms.each(function(_, el){
    new TweetCompose(el);
  });

});
