Template.questions.questions = function() {
  return Questions.find().fetch();
};

Template.question.events({
  'click #deleteQuestion': function(){
    Questions.remove(this._id);
  },
  'click .qTitle': function() {
    console.log("I Clicked!");
    Session.set('currentQuestion', this._id);
  }
});