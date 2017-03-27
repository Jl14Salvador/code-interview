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

  describe('Test user one roles: ', () => {

      it('UserOne: Function returns 2 scopes', () => {
        let result = findScopes(users.userThree, scopes);
        expect(result.length).to.be.equal(2); 
      });

      it('UserOne: Function returns login and update', () => {
        let result = findScopes(users.userThree, scopes); 
        expect(result).at(0).to.be('login');
        expect(result).at(1).to.be('update');
      }); 
      
  });
  
  describe('Test user two roles: ', () => {

    it('userTwo: Function returns no scopes', () => {
      let result = findScopes(users.userThree, scopes);
      expect(result.length).to.be.equal(0); 
    });

  });

  describe('Test user Three roles:', () => {

    it('userThree: Function returns 3 scopes', () => {
      let result = findScopes(users.userThree, scopes);
      expect(result.length).to.be.equal(3); 
    });

    it('userThree: Function returns login, update, delete', () => {
      let result = findScopes(users.userThree, scopes); 
      expect(result).at(0).to.be('login');
      expect(result).at(1).to.be('update');
      expect(result).at(2).to.be('delete');
    }); 

  });

});
