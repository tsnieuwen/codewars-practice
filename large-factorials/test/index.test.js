const { factorial } = require('../index');

it('calculates factorials successfully', () => {
  expect(factorial(4)).toEqual(24);
})

it('handles sad paths', () => {
  expect(factorial(-1)).toEqual('Please provide postive integer');
})