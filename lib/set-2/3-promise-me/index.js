const _ = require('lodash');
const when = require('when');
const sinon = require('sinon');
require('sinon-as-promised');

module.exports = function requestResults() {

  // // These stub functions replicate async requests
  let requestOne = sinon.stub().resolves(1);
  let requestTwo = sinon.stub().resolves(2);
  let orderOfPromises; 

  //a promise can have three states: fulfilled, pending or rejected 
  //first we create our promises form the two requests 
  var promise = promise(requestOne); 
  var promise2 = promise(requestTwo);

  //once the promises are resolved we add it to the the orderOfPromises array
  //These two resolved functions happen independently and the first one to complete will execute
  var resolved = when.resolve(promise).then(function() {
    orderOfPromises.push(1); 
  });

  var resolved2 = when.resolve(promise2).then(function() {
    orderOfPromises.push(2); 
  }); 

  //sets a promise that is only fulfilled once request one and two have both been completed
  let fullPromise = when.all([requestOne, requestTwo]).then(function(one, two) {
    let results = orderOfPromises;  
  }, function(onRejected){
    //error occured, return empty array in this case
    console.log('Promises never fulfilled'); 
    let results = [];  
  });

  return fullPromise; 

};
  