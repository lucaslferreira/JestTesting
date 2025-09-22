const sum = require('../src/sum');

test('soma 1 + 2 igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('soma números negativos', () => {
  expect(sum(-1, -2)).toBe(-3);
});

