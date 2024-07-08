const argscheck = require('cordova/argscheck');
const exec = require('cordova/exec');

function TestFramework() {}

/**
 * Get device info
 *
 * @param {Function} successCallback The function to call when the heading data is available
 * @param {Function} errorCallback The function to call when there is an error getting the heading data. (OPTIONAL)
 */
TestFramework.prototype.getEnvironmentType = function (successCallback, errorCallback) {
  argscheck.checkArgs('fF', 'TestFramework.getEnvironmentType', arguments);
  exec(successCallback, errorCallback, 'TestFramework', 'getEnvironmentType', []);
};

module.exports = new TestFramework();
