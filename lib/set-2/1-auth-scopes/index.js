const _ = require('lodash');

module.exports = function findScope(user, role, scopes) {

	//If user is undefined or does not exist, throw error
	if(_.isNil(user)){
		callback(new Error('User is not defined'));
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
