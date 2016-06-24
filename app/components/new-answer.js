import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		addAnswer() {
			var params = {
				author: this.get('author'),
				response: this.get('response'),
				question: this.get('question')
			};
			this.sendAction('addAnswer2', params);
			this.set('author', ''),
			this.set('response', '')
		}	
	}
}); 