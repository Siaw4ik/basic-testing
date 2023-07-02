// Uncomment the code below and write your tests
import {  simpleCalculator, Action } from './index';

const testCases = [
    { input: { a: 1, b: 2, action: Action.Add }, expected: 3 },
    { input: { a: 1, b: 2, action: Action.Add }, expected: 3 },
    { input: { a: 2, b: 2, action: Action.Add }, expected: 4 },
    { input: { a: 3, b: 2, action: Action.Subtract }, expected: 1 },
    { input: { a: 8, b: 2, action: Action.Subtract }, expected: 6 },
    { input: { a: 4, b: 2, action: Action.Divide }, expected: 2 },
    { input: { a: 10, b: 2, action: Action.Divide }, expected: 5 },
    { input: { a: 3, b: 2, action: Action.Multiply }, expected: 6 },
    { input: { a: 11, b: 1, action: Action.Multiply }, expected: 11 },
    { input: { a: 3, b: 2, action: Action.Exponentiate }, expected: 9 },
    { input: { a: 5, b: 2, action: Action.Exponentiate }, expected: 25 },
    { input: { a: '3', b: 2, action: Action.Add }, expected: null },
    { input: { a: 'five', b: 2, action: Action.Add }, expected: null },
    { input: { a: 3, b: 2, action: 'plus' }, expected: null },
    { input: { a: 3, b: 2, action: 'something' }, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'testing function using the table-driven testing approach, utilizing the appropriate Jest API',
    ({ input, expected }) => {
      expect(simpleCalculator(input)).toEqual(expected);
    }
  );
});
