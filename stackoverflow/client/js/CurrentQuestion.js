Template.currentQuestion.question  = function(){
  return Questions.find( {_id: Session.get('currentQuestion')} ).fetch();
};
Template.currentQuestion.loggedIn = function(){
  return Meteor.user();
};


Template.currentQuestion.events({
  'click #closeCurrentQuestion': function(){
    Session.set('currentQuestion', '');
  },
  'click #addAnswer': function(){
    Answers.insert({
      question: Session.get('currentQuestion'),
      answerText: $('#anAnswer').val(),
      user: Meteor.user().username || Meteor.user().profile.name,
      userID: Meteor.userId(),
      acceptedAnswer: false
    });
    $('#anAnswer').val('');
  },
  'click .acceptBox': function(event){

    if(Questions.find( {_id: Session.get('currentQuestion')} ).fetch()[0].userID === Meteor.userId()){
        var answers = Answers.find({question: Session.get('currentQuestion')}, {acceptedAnswer: 1}).fetch()

        if( Answers.findOne({_id: this._id}, {acceptedAnswer: 1}).acceptedAnswer) {
          Answers.update(this._id, {$set: {acceptedAnswer: false}});
        }else{
          Answers.update(this._id, {$set: {acceptedAnswer: true}});
        }
        var current = Questions.find({_id: Session.get('currentQuestion')}).fetch()[0];
        if(current.acceptedAnswerID === this._id){
          Questions.update({_id: current._id}, {$set: {acceptedAnswerID: null}} )
        }else{
          Questions.update({_id: current._id}, {$set: {acceptedAnswerID: this._id}} )
        }       
    }  
  }
});






