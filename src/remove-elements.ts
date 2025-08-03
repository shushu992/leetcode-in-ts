/**
 * https://leetcode.com/problems/remove-element/
 *
 * 0 <= nums.length <= 100
 * 0 <= nums[i] <= 50
 * 0 <= val <= 100
 */
function removeElement(nums: number[], val: number): number {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    nums[k] = nums[i];
    if (nums[i] !== val) {
      k++;
    }
  }

  return k;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it('example 1', () => {
    const nums = [ 3, 2, 2, 3 ];
    const val = 3;
    const output = [ 2, 2 ];

    expect(removeElement(nums, val)).toEqual(output.length);
    expect(nums.slice(0, output.length).sort()).toEqual(output.sort());
  });

  it('example 2', () => {
    const nums = [ 0, 1, 2, 2, 3, 0, 4, 2 ];
    const val = 2;
    const output = [ 0, 1, 4, 0, 3 ];

    expect(removeElement(nums, val)).toEqual(output.length);
    expect(nums.slice(0, output.length).sort()).toEqual(output.sort());
  });
}
