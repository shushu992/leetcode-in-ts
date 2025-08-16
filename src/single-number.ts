/**
 * https://leetcode.com/problems/single-number/
 *
 * 1 <= nums.length <= 3 * 10^4
 * -3 * 10^4 <= nums[i] <= 3 * 10^4
 * Each element in the array appears twice except for one element which appears only once.
 */
function singleNumber(nums: number[]): number {
  let x = 0;

  for (const n of nums) {
    x ^= n;
  }

  return x;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it('example 1', () => {
    const nums = [ 2, 2, 1 ];
    expect(singleNumber(nums)).toEqual(1);
  });

  it('example 2', () => {
    const nums = [ 4, 1, 2, 1, 2 ];
    expect(singleNumber(nums)).toEqual(4);
  });

  it('example 3', () => {
    const nums = [ 1 ];
    expect(singleNumber(nums)).toEqual(1);
  });
}
