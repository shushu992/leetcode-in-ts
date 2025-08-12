import ListNode from './definition/list-node';

/**
 * https://leetcode.com/problems/contains-duplicate/
 *
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 */
function containsDuplicate(nums: number[]): boolean {
  const arr = new Array<ListNode>(nums.length);

  for (const n of nums) {
    const mod = n % nums.length;

    if (arr[mod]) {
      let node: ListNode | null = arr[mod];
      while (node) {
        if (node.val === n) {
          return true;
        }
        if (node.next) {
          node = node.next;
        } else {
          node.next = { val: n, next: null };
          break;
        }
      }
      continue;
    }

    arr[mod] = { val: n, next: null };
  }

  return false;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it('example 1', () => {
    const nums = [ 1, 2, 3, 1 ];
    expect(containsDuplicate(nums)).toEqual(true);
  });

  it('example 2', () => {
    const nums = [ 1, 2, 3, 4 ];
    expect(containsDuplicate(nums)).toEqual(false);
  });

  it('example 3', () => {
    const nums = [ 1, 1, 1, 3, 3, 4, 3, 2, 4, 2 ];
    expect(containsDuplicate(nums)).toEqual(true);
  });

  it('test 1', () => {
    const nums = [ 1 ];
    expect(containsDuplicate(nums)).toEqual(false);
  });

  it('test 2', () => {
    const nums = new Array(10000)
      .fill(0);
    expect(containsDuplicate(nums)).toEqual(true);
  });

  it('test 3', () => {
    const nums = new Array(10000)
      .fill(0)
      .map((_, i) => i); // [ 0, 1, 2, ..., 9999 ]
    expect(containsDuplicate(nums)).toEqual(false);
  });

  it('test 4', () => {
    const nums = [ 2, 14, 18, 22, 22 ];
    expect(containsDuplicate(nums)).toEqual(true);
  });
}
