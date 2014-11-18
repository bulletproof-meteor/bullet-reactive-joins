Meteor.subscribe('getComments');

Template.comments.helpers({
  getComments: function() {
    return Comments.find();
  },

  author: function() {
    var user = Users.findOne(this.author);
    if(user) {
      return user.name;
    }
  }
});

AddComment = function(text) {
  Meteor.call('addComment', text, function(err) {
    if(err) {
      alert(err.reason);
    }
  })
};