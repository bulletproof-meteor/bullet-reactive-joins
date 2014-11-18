Meteor.publish('getComments', function() {
  var comments = Comments.find();
  var userIds = comments.map(function(comment) {
    return comment.author;
  });

  return [
    comments, 
    Users.find({_id: {$in: userIds}})
  ];
});

Meteor.publish('getUser', function(userId) {
  return Users.find(userId);
});

Meteor.methods({
  addComment: function(text) {
    var name = Names[Math.ceil(Math.random() * 100)].name;
    var username = name.split(' ')[0].toLowerCase();
    
    Users.upsert({_id: username}, {$set: {name: name}});
    Comments.insert({text: text, author: username, authorName: name});
  }
});