import Ember from 'ember';

export default Ember.Component.extend({
	updateQuestionForm: false,
  actions: {
  	updateQuestionForm() {
  		this.set('updateQuestionForm', true);
  	},
    update(question) {
      var params = {
        author: this.get('author'),
        comment: this.get('comment'),
        notes: this.get('notes')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});