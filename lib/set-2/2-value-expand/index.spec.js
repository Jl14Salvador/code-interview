const {expect} = require('chai');
const valueExpand = require('.');

describe('Set-1: Value Expand', () => {
  let inputObject;

  beforeEach(() => {

    inputObject = {
      1: {
        values: {
          36: 0.7
        },
        uuids: {
          finance_rate_id: {
            36: '43378e65-a835-47e0-8577-e24d80d3e2d4'
          },
          trim_id: 'fa6205dd-43e2-4935-ba6f-fdeb7e2f207d'
        }
      },
      2: {
        values: {
          24: 0.4,
          36: 0.8
        },
        uuids: {
          finance_rate_id: {
            24: '2cdd24a2-a5e7-46b1-80d0-776f3dbbbc79',
            36: '1c5e4ab5-8cf4-4eef-8162-e1642056a57b'
          },
          trim_id: '09f16ef2-1aa5-44bf-8c7a-64cd0ef0b65b'
        }
      },
      10: {
        values: {
          36: 0.9,
          48: 1.2,
          64: 1.6
        },
        uuids: {
          finance_rate_id: {
            36: '29268e5d-70d0-4403-acf0-89b2d3d7d942',
            48: 'fe4b9501-60da-4a8d-81a2-019709b634d8',
            64: 'f468f00e-9962-422a-9096-6e872fd54f5c'
          },
          trim_id: '09f16ef2-1aa5-44bf-8c7a-64cd0ef0b65b'
        }
      }
    };

  });

  it('Base Test : Function returns expected keys', () => {
    let result = valueExpand(inputObject);
    expect(Object.keys(result)).to.eql([1, 2, 10]);
  });

  // Write your correctness tests here
  it('Test 1: Function returns expected number of arrays', () => {
    let result = valueExpand(inputObject);
    expect(Object.keys(result)).to.eql([1, 2, 10]);
  });

  it('Test 2: Function returns the proper object for 1st element', () => {
    let result = valueExpand(inputObject); 
    expect(result).to.have.deep.property('1'[0].values.start_term, '36'); 
    expect(result).to.have.deep.property('1'[0].values.end_term, '36'); 
    expect(result).to.have.deep.property('1'[0].values.rate, '0.7'); 
    expect(result).to.have.deep.property('1'[0].uuids.finance_rate_id, '43378e65-a835-47e0-8577-e24d80d3e2d4'); 
    expect(result).to.have.deep.property('1'[0].uuids.trim_id, 'fa6205dd-43e2-4935-ba6f-fdeb7e2f207d'); 
  });

  it('Test 3: Function returns the proper object for 2nd element', () => {
    let result = valueExpand(inputObject); 
    expect(result).to.have.deep.property('2'[0].values.start_term, '24'); 
    expect(result).to.have.deep.property('2'[0].values.end_term, '24'); 
    expect(result).to.have.deep.property('2'[0].values.rate, '0.4'); 
    expect(result).to.have.deep.property('2'[0].uuids.finance_rate_id, '2cdd24a2-a5e7-46b1-80d0-776f3dbbbc79'); 
    expect(result).to.have.deep.property('2'[0].uuids.trim_id, '09f16ef2-1aa5-44bf-8c7a-64cd0ef0b65b'); 

    expect(result).to.have.deep.property('2'[1].values.start_term, '36'); 
    expect(result).to.have.deep.property('2'[1].values.end_term, '36'); 
    expect(result).to.have.deep.property('2'[1].values.rate, '0.8'); 
    expect(result).to.have.deep.property('2'[1].uuids.finance_rate_id, '1c5e4ab5-8cf4-4eef-8162-e1642056a57b'); 
    expect(result).to.have.deep.property('2'[1].uuids.trim_id, '09f16ef2-1aa5-44bf-8c7a-64cd0ef0b65b'); 
  });

  it('Test 4: Function returns the proper object for 3rd element', () => {
    let result = valueExpand(inputObject); 
    expect(result).to.have.deep.property('10'[0].values.start_term, '36'); 
    expect(result).to.have.deep.property('10'[0].values.end_term, '36'); 
    expect(result).to.have.deep.property('10'[0].values.rate, '0.9'); 
    expect(result).to.have.deep.property('10'[0].uuids.finance_rate_id, '29268e5d-70d0-4403-acf0-89b2d3d7d942'); 
    expect(result).to.have.deep.property('10'[0].uuids.trim_id, '09f16ef2-1aa5-44bf-8c7a-64cd0ef0b65b');

    expect(result).to.have.deep.property('10'[1].values.start_term, '48'); 
    expect(result).to.have.deep.property('10'[1].values.end_term, '48'); 
    expect(result).to.have.deep.property('10'[1].values.rate, '1.2'); 
    expect(result).to.have.deep.property('10'[1].uuids.finance_rate_id, 'fe4b9501-60da-4a8d-81a2-019709b634d8'); 
    expect(result).to.have.deep.property('10'[1].uuids.trim_id, '09f16ef2-1aa5-44bf-8c7a-64cd0ef0b65b');  

    expect(result).to.have.deep.property('10'[2].values.start_term, '64'); 
    expect(result).to.have.deep.property('10'[2].values.end_term, '64'); 
    expect(result).to.have.deep.property('10'[2].values.rate, '1.6'); 
    expect(result).to.have.deep.property('10'[2].uuids.finance_rate_id, 'f468f00e-9962-422a-9096-6e872fd54f5c'); 
    expect(result).to.have.deep.property('10'[2].uuids.trim_id, '09f16ef2-1aa5-44bf-8c7a-64cd0ef0b65b'); 
  });
  
});
