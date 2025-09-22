const sum = require('../src/sum');

test('demo: soma 2 + 2 igual a 5 (falha proposital)', () => {
  expect(sum(2, 2)).toBe(5);
});
