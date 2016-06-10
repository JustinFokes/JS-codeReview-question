import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		save1() {
			var params = {
				author: this.get('author'),
				comment: this.get('comment'),
				notes: this.get('notes'),
			};
			this.sendAction('save1', params);	
		}	
	}
}); 