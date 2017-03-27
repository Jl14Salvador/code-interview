const _ = require('lodash');

const idAttribute = 'finance_rate_id';

// Complete this function
module.exports = function valueExpand(inputObject) {
	
	let expandedObject; 
	let valuesObject; 
	let uuidsObject;
	let mergedObj; 

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
			let count = 0; 
			_.forIn(ids.uuids.finance_rate_id, function(value, key) {
				uuidsObject.finance_rate_id = value; 
				uuidsObject.trim_id = ids.uuids.trim_id
				mergedObj = _.merge(expandedObject.ids[count], uuidsObject); 
				expandedObject.ids.pop(); 
				expandedObject.ids.push(mergedObj); 
				count++; 
			});
		}
	});

  return expandedObject;
};
