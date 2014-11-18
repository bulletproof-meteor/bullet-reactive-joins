if(!Comments.findOne()) {
  Meteor.call('addComment', "BulletProof Meteor is great!");
  Meteor.call('addComment', "Thanks MeteorHacks.");
}
