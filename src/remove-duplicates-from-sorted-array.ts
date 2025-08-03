import { arrToListNode } from './definition/list-node';

/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 *
 * 1 <= nums.length <= 3 * 10^4
 * -100 <= nums[i] <= 100
 * nums is sorted in non-decreasing order.
 */
function removeDuplicates(nums: number[]): number {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it('example 1', () => {
    const nums = [ 1, 1, 2 ];
    const output = [ 1, 2 ];

    expect(removeDuplicates(nums)).toEqual(output.length);
    expect(nums.slice(0, output.length)).toEqual(output);
  });

  it('example 2', () => {
    const nums = [ 1, 1, 2 ];
    const output = [ 1, 2 ];

    expect(removeDuplicates(nums)).toEqual(output.length);
    expect(nums.slice(0, output.length)).toEqual(output);
  });

  it('example 3', () => {
    const nums = [ 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 ];
    const output = [ 0, 1, 2, 3, 4 ];

    expect(removeDuplicates(nums)).toEqual(output.length);
    expect(nums.slice(0, output.length)).toEqual(output);
  });
}
