const _ = require('lodash');

module.exports = function findScope(user, role, scopes) {
	//We need a function that takes a user_id, and 
	// returns an array of their scopes (one, or more).
	//if user ID does not exist throw an error
	//if the user does not have any scopes we return empty 

	//If user is undefined or does not exist, throw error
	if(_.isNil(user)){
		callback(new Error('something bad happened'));
	}
	//If user exists but has no scopes
	if(_.isEmpty(user)){
		return []; 
	}
	//User exists, we extract its scopes and return it
	else{
		let userRoleNames;
		let roleScopes = _.map(role, 'scopes'); //This returns an array scopes
		_forEach(roleScopes, function(roleScope) {
			user.scopes.push(roleScope); 
		});
		return user.scopes; 
	}	
};
