import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
<<<<<<< HEAD
  this.route('question', {path: 'question/:question_id'});
=======
  this.route('question', {path:'question/:question_id'});
>>>>>>> feae7180d228647b0ba991ba396ff3a64dec9582
  this.route('answer', {path: 'answer/:answer_id'});
});

export default Router;
