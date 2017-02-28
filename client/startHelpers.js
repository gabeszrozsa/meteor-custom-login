Template.start.helpers({
  currentName: function(){
    var user = Meteor.users.findOne();
    if (user) {
      return user._id;
    }
  },
});
