/**
 * https://leetcode.com/problems/merge-sorted-array/
 * Do not return anything, modify nums1 in-place instead.
 *
 * nums1.length == m + n
 * nums2.length == n
 * 0 <= m, n <= 200
 * 1 <= m + n <= 200
 * -10^9 <= nums1[i], nums2[j] <= 10^9
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = m + n - 1; i >= 0; i--) {
    if (m <= 0) {
      nums1[i] = nums2[--n];
      continue;
    }

    if (n <= 0) {
      nums1[i] = nums1[--m];
      continue;
    }

    if (nums1[m - 1] >= nums2[n - 1]) {
      nums1[i] = nums1[--m];
    } else {
      nums1[i] = nums2[--n];
    }
  }
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it('example 1', () => {
    const nums1: number[] = [ 1, 2, 3, 0, 0, 0 ];
    const m = 3;
    const nums2: number[] = [ 2, 5, 6 ];
    const n = 3;
    const output: number[] = [ 1, 2, 2, 3, 5, 6 ];

    merge(nums1, m, nums2, n);
    expect(nums1.slice(0, m + n)).toEqual(output);
  });

  it('example 2', () => {
    const nums1: number[] = [ 1 ];
    const m = 1;
    const nums2: number[] = [ 0 ];
    const n = 0;
    const output: number[] = [ 1 ];

    merge(nums1, m, nums2, n);
    expect(nums1.slice(0, m + n)).toEqual(output);
  });

  it('example 3', () => {
    const nums1: number[] = [ 0 ];
    const m = 0;
    const nums2: number[] = [ 1 ];
    const n = 1;
    const output: number[] = [ 1 ];

    merge(nums1, m, nums2, n);
    expect(nums1.slice(0, m + n)).toEqual(output);
  });
}
