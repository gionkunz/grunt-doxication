'use strict';

/**
 * This is a test namespace
 *
 * @namespace Namespace
 */
var Namespace = {
  /**
   * @param {string} myParam1 A first test parameter
   * @param {number} myParam2 A second test parameter
   * @return {object} A combination of the parameters
   * @memberof Namespace
   * @function
   */
  myFunction: function(myParam1, myParam2) {
    return {
      p1: myParam1,
      p2: myParam2
    };
  },
  myMember: 'test'
};