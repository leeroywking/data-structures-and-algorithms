'use strict';

let checker = require('./missing-number.js');

describe('missing number tests', () => {
  xit('passes testcase 1 ', () => {
    expect(checker([0])).toBe(1);
  });
  xit('passes testcase 1 ', () => {
    expect(checker([1])).toBe(0);
  });
  xit('passes testcase 1 ', () => {
    expect(checker([3, 0, 1])).toBe(2);
  });
  xit('passes testcase 1 ', () => {
    expect(checker([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
  });
  xit('passes testcase 1 ', () => {
    expect(
      checker([
        45,
        35,
        38,
        13,
        12,
        23,
        48,
        15,
        44,
        21,
        43,
        26,
        6,
        37,
        1,
        19,
        22,
        3,
        11,
        32,
        4,
        16,
        28,
        49,
        29,
        36,
        33,
        8,
        9,
        39,
        46,
        17,
        41,
        7,
        2,
        5,
        27,
        20,
        40,
        34,
        30,
        25,
        47,
        0,
        31,
        42,
        24,
        10,
        14
      ])
    ).toBe(18);
  });
});
