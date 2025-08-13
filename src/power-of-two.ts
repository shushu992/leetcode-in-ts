/**
 * https://leetcode.com/problems/power-of-two/
 *
 * -2^31 <= n <= 2^31 - 1
 */
function isPowerOfTwo(n: number): boolean {
  if (n <= 0) {
    return false;
  }

  if (n <= 1) {
    let x = 1;
    while (x > n) {
      x /= 2;
    }
    return x === n;
  }

  // n > 1
  let y = 1;
  while (y < n) {
    y *= 2;
  }
  return y === n;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it('example 1', () => {
    expect(isPowerOfTwo(1)).toEqual(true);
  });

  it('example 2', () => {
    expect(isPowerOfTwo(16)).toEqual(true);
  });

  it('example 3', () => {
    expect(isPowerOfTwo(3)).toEqual(false);
  });

  it('test 1', () => {
    expect(isPowerOfTwo(0)).toEqual(false);
  });

  it('test 2', () => {
    expect(isPowerOfTwo(-1)).toEqual(false);
  });

  it('test 3', () => {
    expect(isPowerOfTwo(0.5)).toEqual(true);
  });

  it('test 4', () => {
    expect(isPowerOfTwo(0.25)).toEqual(true);
  });

  it('test 5', () => {
    expect(isPowerOfTwo(0.125)).toEqual(true);
  });

  it('test 6', () => {
    expect(isPowerOfTwo(0.7)).toEqual(false);
  });

  it('test 7', () => {
    expect(isPowerOfTwo(0.2)).toEqual(false);
  });
}
