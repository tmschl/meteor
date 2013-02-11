Accounts.ui.config({
  requestPermissions: {
    facebook: ['user_likes'],
    github: ['user', 'repo']
  },
  requestOfflineToken: {
    google: true
  },
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

Template.userWindow.username = function(){
  console.log("running");
  return Meteor.user();
};
Template.userWindow.loggedIn = function () {
  return Meteor.user();
};
Template.userWindow.currentQuestion = function(){
  return Session.get('currentQuestion');
}

