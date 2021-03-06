/**
 * Created on 1/7/16.
 * @author rankun203
 */
'use strict';

/**
 * Convert a series of arguments to an object,
 * arguments length should be a even number.
 * @returns {{}} the generated Object
 */
module.exports = function () {
  var obj = {};
  if (arguments.length % 2 != 0) {
    throw new Error('Arguments length should be an even number: ' + arguments);
  }
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i + 1]) {
      obj[arguments[i]] = arguments[i + 1];
    }
    i++;
  }
  return obj;
};
