Template.newQuestion.events({
  'click #qSubmit': function(){
    Questions.insert({
      qTitle: $('#qTitle').val(),
      qText: $('#qText').val() ,
      user: Meteor.user().username || Meteor.user().profile.name,
      userID: Meteor.userId(),
      acceptedAnswerID: null
    })
    $('#qTitle').val('');
    $('#qText').val(''); 
  }
});