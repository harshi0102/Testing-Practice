// stringLength.test.js

const stringLength = require('./stringLength');

test('String length is correct', () => {
  expect(stringLength('hello')).toBe(5);
});

test('String with no characters throws error', () => {
  expect(() => {
    stringLength('');
  }).toThrow('Input string must contain at least one character');
});

test('String with more than 10 characters throws error', () => {
  expect(() => {
    stringLength('abcdefghijk');
  }).toThrow('Input string must not exceed 10 characters');
});

test('Non-string input throws TypeError', () => {
  expect(() => {
    stringLength(123);
  }).toThrow(TypeError);
});
