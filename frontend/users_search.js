function UsersSearch (el) {
  this.$el = $(el);
  this.$input = $(el).find("input");
  this.$list = $(el).find("ul.users");

  this.handleInput();
}

UsersSearch.prototype.handleInput = function () {
  this.$input.on('input', function(e){
    e.preventDefault();

    $.ajax({
      type: "GET",
      url: "/users/search",
      dataType: "JSON",
      data: { query: this.$input.val() },
      success: function (data) {
        console.log(data);
      },
      error: function () {
        console.log("error");
      }
    });
  }.bind(this));
};

module.exports = UsersSearch;
