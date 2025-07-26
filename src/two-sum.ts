/**
 * https://leetcode.com/problems/two-sum/
 */
function twoSum(nums: number[], target: number): number[] {
  const size = nums.length;
  const arr = new Array<[ number, number ][]>(size); // [ self, index ]

  for (let i = 0; i < size; i++) {
    const num = nums[i];
    arr[num % size] = arr[num % size] || [];
    arr[num % size].push([ num, i ]);
  }

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const subtraction = target - num;

    const bucket = arr[subtraction % nums.length];
    if (!bucket) continue;

    for (const [ self, i1 ] of bucket) {
      if (i === i1) continue;
      if (num + self === target) return [ i, i1 ];
    }
  }

  return [];
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it('example 1', () => {
    const nums = [ 2, 7, 11, 15 ];
    const target = 9;
    expect(twoSum(nums, target).sort())
      .toEqual([ 0, 1 ].sort());
  });

  it('example 2', () => {
    const nums = [ 3, 2, 4 ];
    const target = 6;
    expect(twoSum(nums, target).sort())
      .toEqual([ 1, 2 ].sort());
  });

  it('example 3', () => {
    const nums = [ 3, 3 ];
    const target = 6;
    expect(twoSum(nums, target).sort())
      .toEqual([ 0, 1 ].sort());
  });
}
