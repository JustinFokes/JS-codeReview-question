import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
	author: DS.attr(),
<<<<<<< HEAD
	response: DS.attr(),
	question: DS.belongsTo('question', {async:true})
=======
	respone: DS.attr(),
	questions: DS.belongsTo('question', {async:true})
>>>>>>> feae7180d228647b0ba991ba396ff3a64dec9582
});
