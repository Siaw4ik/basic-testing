// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const input = {
      a: 5,
      b: 3,
      action: Action.Add,
    };

    expect(simpleCalculator(input)).toEqual(8);
  });

  test('should subtract two numbers', () => {
    const input = {
      a: 5,
      b: 3,
      action: Action.Subtract,
    };

    expect(simpleCalculator(input)).toEqual(2);
  });

  test('should multiply two numbers', () => {
    const input = {
      a: 5,
      b: 3,
      action: Action.Multiply,
    };

    expect(simpleCalculator(input)).toEqual(15);
  });

  test('should divide two numbers', () => {
    const input = {
      a: 6,
      b: 3,
      action: Action.Divide,
    };

    expect(simpleCalculator(input)).toEqual(2);
  });

  test('should exponentiate two numbers', () => {
    const input = {
      a: 6,
      b: 3,
      action: Action.Exponentiate,
    };

    expect(simpleCalculator(input)).toEqual(216);
  });

  test('should return null for invalid action', () => {
    const input = {
      a: 5,
      b: 3,
      action: 'someThing',
    };

    expect(simpleCalculator(input)).toEqual(null);

  });

  test('should return null for invalid arguments', () => {
    const input = {
      a: '5',
      b: 3,
      action: Action.Add,
    };

    expect(simpleCalculator(input)).toEqual(null);
  });
});