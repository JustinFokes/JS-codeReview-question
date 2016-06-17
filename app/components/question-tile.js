import Ember from 'ember';

export default Ember.Component.extend({
	favoriteQuestion: Ember.inject.service(),
	commentNotes: Ember.computed('question.comment', 'question.notes', function(){
		return this.get('question.comment') +" " + 'Oh and by the way:' +" " + this.get('question.notes');
	}),
	
	updateQuestionForm: false,
	actions: {
		update(question, params) {
			this.sendAction('update', question, params);
		},
		addToList(question1) {
			console.log(question1);
			this.get('favoriteQuestion').add(question1);
		}
	}
});


