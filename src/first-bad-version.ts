type IsBadVersion = (version: number) => boolean;


/**
 * https://leetcode.com/problems/first-bad-version/
 *
 * 1 <= bad <= n <= 2^31 - 1
 */
function solution(isBadVersion: IsBadVersion) {
  return function (n: number): number {
    let x = 1, y = n;

    while (x < y) {
      const m = Math.floor((x + y) / 2);
      if (isBadVersion(m)) {
        y = m;
      } else {
        x = m + 1;
      }
    }

    return x;
  };
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  function create(badVersion: number): (input: number) => boolean {
    return (input: number) => input >= badVersion;
  }

  it('example 1', () => {
    const n = 5;
    const bad = 4;

    const func = solution(create(bad));
    expect(func(n)).toEqual(bad);
  });

  it('example 2', () => {
    const n = 1;
    const bad = 1;

    const func = solution(create(bad));
    expect(func(n)).toEqual(bad);
  });

  it('test 1', () => {
    const n = Number.MAX_SAFE_INTEGER;
    const bad = 1;

    const func = solution(create(bad));
    expect(func(n)).toEqual(bad);
  });

  it('test 2', () => {
    const n = Number.MAX_SAFE_INTEGER;
    const bad = Number.MAX_SAFE_INTEGER;

    const func = solution(create(bad));
    expect(func(n)).toEqual(bad);
  });

  it('test 3', () => {
    const n = 2;
    const bad = 1;

    const func = solution(create(bad));
    expect(func(n)).toEqual(bad);
  });

  it('test 4', () => {
    const n = 3;
    const bad = 2;

    const func = solution(create(bad));
    expect(func(n)).toEqual(bad);
  });

  it('test 5', () => {
    const n = 4;
    const bad = 3;

    const func = solution(create(bad));
    expect(func(n)).toEqual(bad);
  });
}
