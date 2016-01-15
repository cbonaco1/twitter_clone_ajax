var TweetCompose = function (form) {
  this.$textArea = $(form).find("#tweet-content");
  this.content = this.$textArea.val();
  this.$mention = $(form).find("#tweet-mentions");
  this.mentioned = this.$mention.val();

  this.$form = $(form);

  this.handleSubmit();
};

TweetCompose.prototype.handleSubmit = function () {
  this.$form.on("submit", function (e) {
    e.preventDefault();

    var data = this.$form.serializeJSON();

    $.ajax({
      type: "POST",
      url: "/tweets",
      data: { tweet: data.tweet },
      dataType: "json",
      success: function (data) {
        console.log(data);
      },
      error: function() {
        console.log("error error");
      }

    });
  }.bind(this));
};


module.exports = TweetCompose;
