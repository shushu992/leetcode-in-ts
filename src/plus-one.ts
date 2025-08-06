/**
 * https://leetcode.com/problems/plus-one/
 *
 * 1 <= digits.length <= 100
 * 0 <= digits[i] <= 9
 * digits does not contain any leading 0's.
 */
function plusOne(digits: number[]): number[] {
  const arr = digits.slice();
  arr[arr.length - 1]++;

  let carry = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    const sum = arr[i] + carry;
    arr[i] = sum % 10;
    carry = sum >= 10 ? 1 : 0;
  }

  if (carry === 1)
    arr.unshift(1);

  return arr;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it('example 1', () => {
    const digits = [ 1, 2, 3 ];
    const output = [ 1, 2, 4 ];
    expect(plusOne(digits)).toEqual(output);
  });

  it('example 2', () => {
    const digits = [ 4, 3, 2, 1 ];
    const output = [ 4, 3, 2, 2 ];
    expect(plusOne(digits)).toEqual(output);
  });

  it('example 3', () => {
    const digits = [ 9 ];
    const output = [ 1, 0 ];
    expect(plusOne(digits)).toEqual(output);
  });

  it('test 1', () => {
    const digits = [ 0 ];
    const output = [ 1 ];
    expect(plusOne(digits)).toEqual(output);
  });

  it('test 2', () => {
    const digits = [ 9, 9, 9 ];
    const output = [ 1, 0, 0, 0 ];
    expect(plusOne(digits)).toEqual(output);
  });
}
