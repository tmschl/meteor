Template.answers.answer = function(){
  console.log("Pulling up answers")
  return Answers.find({question: Session.get('currentQuestion')});
};

Template.answer.anAnswerAccepted = function(){
  return Questions.find( {_id: Session.get('currentQuestion')} ).fetch()[0].acceptedAnswerID;
}
Template.answer.canAccept = function(){
  var qUserId = Questions.find({_id: Session.get('currentQuestion')}).fetch()[0].userID;
  if(qUserId === Meteor.userId()){
    console.log('Question is the users')
    return true;
  } else {
    
    return false;
  }
};