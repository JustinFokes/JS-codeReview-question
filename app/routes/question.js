import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.store.findRecord('question', params.question_id);
	},
	actions: {
		addAnswer3(params) {
			var newAnswer = this.store.createRecord('answer', params);
			var question = params.question;
			question.get('answers').addObject(newAnswer);
			newAnswer.save().then(function() {
				return question.save();
			});
<<<<<<< HEAD
			this.transitionTo('question', question.id);
=======
			this.transitionTo('question/:question_id');
>>>>>>> feae7180d228647b0ba991ba396ff3a64dec9582
		}
	}
});