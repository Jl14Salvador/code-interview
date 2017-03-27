/* eslint no-unused-expressions:0 */
const {expect} = require('chai');
const requestResults = require('.');
const sinon = require('sinon');

describe('Set-2: Promise Me', () => {

  beforeEach(() => {});

  it('Base Test : Ensure array is not empty', () => {

    return requestResults().then(results => {
      expect(results).to.not.be.empty;
    });

  });

  it('Test 1 : Ensure resulting promise is called once', () => {

  	results = requestResult(); 
    var spy = sinon.spy(results); 
    expect(spy.calledOnce()); 

  });

});
