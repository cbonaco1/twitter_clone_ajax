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

    $(":input").prop("disabled", true);


    $.ajax({
      type: "POST",
      url: "/tweets",
      data: { tweet: data.tweet },
      dataType: "json",
      success: function (data) {
        $(":input").prop("disabled", false);
        console.log(data);
      },
      error: function() {
        $(":input").prop("disabled", false);
        console.log("error error");
      }

    });
  }.bind(this));
};

TweetCompose.prototype.clearInputs = function () {
  $(":input").val("");
};


module.exports = TweetCompose;
