function FollowToggle (el) {
  this.userId = $(el).data("user-id");
  this.followState = $(el).data("initial-follow-state").toString();

  this.$el = $(el);
  this.render();
  this.handleClick();
}

FollowToggle.prototype.render = function () {
  // debugger
  if (this.followState === "true") {
    this.$el.html("Unfollow");
  } else {
    this.$el.html("Follow");
  }
};

FollowToggle.prototype.handleClick = function () {
  this.$el.on("click", function (e) {
    e.preventDefault();

    var method = this.followState === "true" ? "DELETE" : "POST";

    $.ajax( {
      type: method,
      url: "/users/" + this.userId + "/follow",
      dataType: "JSON",
      success: function (data, statusText, xhr) {
        console.log(this);
        this.followState = method === "POST" ? "true" : "false";
        this.render();
      }.bind(this),
      error: function (req, status, err) {
        console.log("Something went wrong: ", status, err);
      }
    });

  }.bind(this));
};

module.exports = FollowToggle;
