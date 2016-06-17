import Ember from 'ember';

export function postPopularity(params/*, hash*/) {
  var post = params[0];

  if(post.get('answers').get('length') > 3) {
  	return Ember.String.htmlSafe('<img src="eye.png"/>');
  }
}

export default Ember.Helper.helper(postPopularity);
