// stringLength.js

function stringLength(string) {
    if (typeof string !== 'string') {
      throw new TypeError('Input must be a string');
    }
    if (string.length === 0) {
      throw new Error('Input string must contain at least one character');
    }
    if (string.length > 10) {
      throw new Error('Input string must not exceed 10 characters');
    }
    return string.length;
  }
  
  module.exports = stringLength;
  