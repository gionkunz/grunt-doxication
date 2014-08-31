'use strict';

describe('Doxication grunt task', function() {

  it('should write correct structure to file when using json', function() {
    var doxicated = require('../generated/dox.json');
    expect(doxicated.length).toBe(2);
    expect(doxicated.filter(function(file) {
      return file.file === 'test/fixture/test.js';
    })[0].dox[0].tags[0].type).toBe('module');
  });

  it('should write correct structure to file when using yaml', function() {
    var doxicated = require('../generated/doxicated.yaml');
    expect(doxicated.length).toBe(2);
    expect(doxicated.filter(function(file) {
      return file.file === 'test/fixture/test.js';
    })[0].dox[0].tags[0].type).toBe('module');
  });

  it('should write correct structure to file when using yml', function() {
    var doxicated = require('../generated/doxicated.yml');
    expect(doxicated.length).toBe(2);
    expect(doxicated.filter(function(file) {
      return file.file === 'test/fixture/test.js';
    })[0].dox[0].tags[0].type).toBe('module');
  });
});