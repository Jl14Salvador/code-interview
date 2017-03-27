const _ = require('lodash');

const idAttribute = 'finance_rate_id';

// Complete this function
module.exports = function valueExpand(inputObject) {
	let expandedObject; 
	let valuesObject; 
	let uuidsObject; 

	// let infoPerTerm; 
	// let numOfTerms; 

	let count = 0; 
	_.forIn(inputObject, function(ids) {
		expandedObject.ids = []; 
		if(_.has(ids, "values")){
			_.forIn(ids.values, function(value, key) {
				valuesObject.start_term = key; 
				valesObject.end_Term = key; 
				valuesObject.rate = value; 
				_forIn(ids.uuids.finance_rate_id)
				expandedObject.ids.push(valuesObject); 
			});
		}
		if(_.has(ids, "uuids")){
			_.forIn(ids.uuids.finance_rate_id, function(value, key) {
				uuidsObject.finance_rate_id = value; 
				uuidsObject.trim_id = ids.uuids.trim_id
				let mergedObj = _.merge(expandedObject.ids[count], uuidsObject); 
				expandedObject.ids.pop(); 
				expandedObject.ids.push(mergedObj); 
				count++; 
			});
		}
	});

	// let valuesObject; 
	// valuesObject = _.mapValues(inputObject, function(ids) {
	// 	return ids.values; 
	// }); 

	

	//old
	/*_.forIn(inputObject, function(ids) {
		expandedObject.ids = []; 
		let valueOBject = _.map(inputObject, function(o) {"values")){
			inputObject.ids
				numOfTerms.property; 	
		}
		
			switch(property) {

			}
		});
		switch(id){
			case 'values': 
				mapValues(id,'12'); 
				mapValues(id, '24'); 
				mapValues(id, '36'); 
				mapValues(id, '48'); 
				mapValues(id, '64'); 
				break; 
			case 'uuids': 

				break; 
		}
		_/*.mapValues(id, '36');  {
			{ 'values:'' '0.7',
				'uuids': '43378e65-a835-47e0-8577-e24d80d3e2d4'

			}
		});
		_.forIn(id, function(properties) {
			switch(properties){
				case 'values': 

			}
		});

		
	});*/
  return expandedObject;
};
