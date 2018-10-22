const tap = require('tap');
const { isGreaterThan, untilIsGreater } = require('../src');

tap.test('is greater than func, returns true', childTest => {
  tap.equal(isGreaterThan(3, 2), true);
  childTest.end();
});

tap.test('is less than, returns false', childTest => {
  tap.equal(isGreaterThan(2, 3), false);
  childTest.end();
});

tap.test('untilIsGreater', childTest => {
  tap.equal(untilIsGreater(2, 12), true);
  childTest.end();
});