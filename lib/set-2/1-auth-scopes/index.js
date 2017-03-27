const _ = require('lodash');

module.exports = function findScope(user, scopes) {

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
		let userScopesID; 
		let userScopeNames;

		userScopesID = ._get(user, 'scopes'); 
		_.forEach(userScopesID, function (userScope){
			 userScopeNames.push(scopes[userScope-1].name); 
		});

		return userScopeNames; 
	}	
};