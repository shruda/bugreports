
// Copyright 2004-present Facebook. All Rights Reserved.

const sum = require('./sum');

describe.each([[1, 2, 3], [1, 4, 5], [2, 6, 8]])(
    '.sum(%i, %i)',
    (a, b, expected) => {
      test(`returns ${expected}`, () => {
        expect(sum(a, b)).toMatchSnapshot(expected);
      });
  
      test(`returned value not be greater than ${expected}`, () => {
        expect(a + b).not.toBeGreaterThan(expected);
      });
  
      test(`returned value not be less than ${expected}`, () => {
        expect(a + b).not.toBeLessThan(expected);
      });
    },
  );