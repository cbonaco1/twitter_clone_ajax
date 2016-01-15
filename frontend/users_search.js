function UsersSearch (el) {
  this.$el = $(el);
  this.$input = $(el).find("input");
  this.$list = $(el).find("ul.users");

  this.handleInput();
}

UsersSearch.prototype.renderResults = function (users) {
  this.$list.html("");
  users.forEach(function(user){
    var username = user.username;
    var id = user.id;
    var url = "/users/" + id;

    var $li = $("<li>");

    var $link = $("<a>");
    $link.attr("href", url);
    $link.html(username);

    $li.append($link);
    $li.append(UsersSearch.createFollowButton(user));

    this.$list.append($li);
  }.bind(this));
};

UsersSearch.prototype.handleInput = function () {
  this.$input.on('input', function(e){
    e.preventDefault();

    $.ajax({
      type: "GET",
      url: "/users/search",
      dataType: "JSON",
      data: { query: this.$input.val() },
      success: function (data) {
        this.renderResults(data);
      }.bind(this),
      error: function () {
        console.log("error");
      }
    });
  }.bind(this));
};

UsersSearch.createFollowButton = function (user) {
  var $button = $("<button>");
  $button.addClass("follow-toggle");
  $button.data("user-id", user.id);
  $button.data("initial-follow-state", user.followed);

  //this calls the FollowToggle constructor which
  //runs the render and handleClick methods
  new FollowToggle($button);

  return $button;
};

module.exports = UsersSearch;
