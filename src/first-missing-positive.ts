/**
 * https://leetcode.com/problems/first-missing-positive/
 *
 * 1 <= nums.length <= 10^5
 * -2^31 <= nums[i] <= 2^31 - 1
 */
function firstMissingPositive(nums: number[]): number {
  function takeSeat(num: number): void {
    if (nums[num - 1] === num) {
      return;
    }
    if (nums[num - 1] <= 0) {
      nums[num - 1] = num;
      return;
    }
    if (nums[num - 1] > nums.length) {
      nums[num - 1] = num;
      return;
    }
    const copy = nums[num - 1];
    nums[num - 1] = num;
    takeSeat(copy);
  }

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === index + 1) {
      continue;
    }
    if (nums[index] <= 0) {
      continue;
    }
    if (nums[index] > nums.length) {
      continue;
    }
    takeSeat(nums[index]);
  }

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== index + 1) {
      return index + 1;
    }
  }

  return nums.length + 1;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it('example 1', () => {
    const nums = [ 1, 2, 0 ];
    expect(firstMissingPositive(nums)).toEqual(3);
  });

  it('example 2', () => {
    const nums = [ 3, 4, -1, 1 ];
    expect(firstMissingPositive(nums)).toEqual(2);
  });

  it('example 3', () => {
    const nums = [ 7, 8, 9, 11, 12 ];
    expect(firstMissingPositive(nums)).toEqual(1);
  });

  it('test 1', () => {
    const nums = [ 1 ];
    expect(firstMissingPositive(nums)).toEqual(2);
  });

  it('test 2', () => {
    const nums = [ 2 ];
    expect(firstMissingPositive(nums)).toEqual(1);
  });

  it('test 3', () => {
    const nums = [ 1, 2 ];
    expect(firstMissingPositive(nums)).toEqual(3);
  });

  it('test 4', () => {
    const nums = [ 2, 1 ];
    expect(firstMissingPositive(nums)).toEqual(3);
  });

  it('test 5', () => {
    const nums = [ 2, 3 ];
    expect(firstMissingPositive(nums)).toEqual(1);
  });

  it('test 6', () => {
    const nums = [ 3, 2 ];
    expect(firstMissingPositive(nums)).toEqual(1);
  });

  it('test 7', () => {
    const nums = [ 3, 2, 1 ];
    expect(firstMissingPositive(nums)).toEqual(4);
  });

  it('test 8', () => {
    // [ 10000, 9999, 9998...3, 2, 1 ]
    const nums = Array.from({ length: 10000 }, (_, i) => 10000 - i);
    expect(firstMissingPositive(nums)).toEqual(10001);
  });
}
