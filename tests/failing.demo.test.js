const sum = require('../src/sum');

// Teste demo propositalmente falho - fácil de consertar para demonstração
test('demo: soma 2 + 2 igual a 5 (falha proposital)', () => {
  // Para consertar durante a apresentação, basta trocar o 5 por 4 no expect
  expect(sum(2, 2)).toBe(5);
});
