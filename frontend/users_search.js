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

module.exports = UsersSearch;
