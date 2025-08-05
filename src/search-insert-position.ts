/**
 * https://leetcode.com/problems/search-insert-position/description/
 *
 * 1 <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 * nums contains distinct values sorted in ascending order.
 * -10^4 <= target <= 10^4
 */
function searchInsert(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];

    if (current >= target) {
      return i;
    }
  }

  return nums.length;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it('example 1', () => {
    const nums = [ 1, 3, 5, 6 ];
    const target = 5;
    expect(searchInsert(nums, target)).toEqual(2);
  });

  it('example 2', () => {
    const nums = [ 1, 3, 5, 6 ];
    const target = 2;
    expect(searchInsert(nums, target)).toEqual(1);
  });

  it('example 3', () => {
    const nums = [ 1, 3, 5, 6 ];
    const target = 7;
    expect(searchInsert(nums, target)).toEqual(4);
  });

  it('test 1', () => {
    const nums = [ 3 ];
    const target = 2;
    expect(searchInsert(nums, target)).toEqual(0);
  });

  it('test 2', () => {
    const nums = [ 3 ];
    const target = 3;
    expect(searchInsert(nums, target)).toEqual(0);
  });

  it('test 3', () => {
    const nums = [ 3 ];
    const target = 4;
    expect(searchInsert(nums, target)).toEqual(1);
  });
}
