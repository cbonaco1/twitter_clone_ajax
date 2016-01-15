function FollowToggle (el) {
  this.userId = $(el).data("user-id");

  this.followState = $(el).data("initial-follow-state") ? "followed" : "unfollowed";

  this.$el = $(el);
  this.render();
  this.handleClick();
}

FollowToggle.prototype.render = function () {

  if (this.followState === "followed") {
    this.$el.html("Unfollow");
  } else {
    this.$el.html("Follow");
  }
};

FollowToggle.prototype.handleClick = function () {
  this.$el.on("click", function (e) {
    e.preventDefault();

    var method = this.followState === "followed" ? "DELETE" : "POST";
    this.$el.prop("disabled", true);

    $.ajax( {
      type: method,
      url: "/users/" + this.userId + "/follow",
      dataType: "json",
      success: function (data, statusText, xhr) {
        this.$el.prop("disabled", false);
        this.followState = method === "POST" ? "followed" : "unfollowed";
        this.render();
      }.bind(this),
      error: function (req, status, err) {
        this.$el.prop("disabled", false);
        console.log("Something went wrong: ", status, err);
      }
    });

  }.bind(this));



};

module.exports = FollowToggle;
