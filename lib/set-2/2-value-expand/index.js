const _ = require('lodash');

const idAttribute = 'finance_rate_id';

module.exports = function valueExpand(inputObject) {
	
	let expandedObject; 
	let valuesObject; 
	let uuidsObject;
	let mergedObj; 

	//We assume the format of the object is exactly as given
	_.forIn(inputObject, function(ids) {
		
		expandedObject.ids = []; 

		//Check if ids have values and then assign the terms and rate to the valuesObject
		if(_.has(ids, "values")){
			_.forIn(ids.values, function(value, key) {
				valuesObject.start_term = key; 
				valesObject.end_Term = key; 
				valuesObject.rate = value; 
				_forIn(ids.uuids.finance_rate_id)
				expandedObject.ids.push(valuesObject); 
			});
		}
		//Check if ids have uuids and loop through to create the expandedObject
		if(_.has(ids, "uuids")){
			let count = 0; 
			_.forIn(ids.uuids.finance_rate_id, function(value, key) {
				//Assign finance_rate_id and trim_id values
				uuidsObject.finance_rate_id = value; 
				uuidsObject.trim_id = ids.uuids.trim_id

				//Create a new merged object of the current object in the array and the uuids object
				mergedObj = _.merge(expandedObject.ids[count], uuidsObject); 

				//Remove the expandedObjects last object and add the newly created mergedObj to it
				expandedObject.ids.pop(); 
				expandedObject.ids.push(mergedObj); 
				count++; 
			});
		}
	});

  return expandedObject;
};
