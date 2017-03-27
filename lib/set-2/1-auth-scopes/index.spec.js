const {expect} = require('chai');
const findScopes = require('.');

describe('Set-1: Auth Scopes', () => {
  let scopes;
  let roles;
  let users;

  beforeEach(() => {

    scopes = [
      {id: 1, name: 'login'},
      {id: 2, name: 'update'},
      {id: 3, name: 'delete'}
    ];

    roles = {
      global: {scopes: [scopes[0].id, scopes[1].id, scopes[2].id]},
      user: {scopes: [scopes[0].id]},
      admin: {scopes: [scopes[0].id, scopes[2].id]}
    };

    users = {
      userOne: {scopes: [1, 2]},
      userTwo: {scopes: []},
      userThree: {scopes: [1, 2, 3]}
    };

  });

  describe('General Tests:', () => {

    it('Base Test : Function returns populated array', () => {
      let result = findScopes(users.userOne, scopes);
      expect(result.length).to.be.above(0);
    });

    it('Empty Test : Function returns empty array', () => {
      let result = findScopes(users.userTwo, scopes);
      expect(result).to.be.empty;
    });

  });
  
  describe('Test user Three roles:', () => {

    it('UserOne: Function returns 3 scopes', () => {
      let result = findScopes(users.userThree, scopes);
      expect(result.length).to.be.equal(3); 
    });

    it('UserOne: Function returns id = 1,2,3', () => {
      let result = findScopes(users.userThree, scopes); 
      expect(result).at(0).to.be(1);
      expect(result).at(1).to.be(2);
      expect(result).at(2).to.be(3);
    }); 

  });

  describe('Test user roles: ', () => {
      it('UserOne: Function returns id = 1,2,3', () => {
        let result = findScopes(users.userThree, scopes); 
        expect(result).at(0).to.be(1);
        expect(result).at(1).to.be(2);
        expect(result).at(2).to.be(3);
      }); 
  });

  describe('Test admin roles: ', () => {

  });

});
