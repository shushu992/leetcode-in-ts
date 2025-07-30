/**
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lowercase English letters if it is non-empty.
 */
function longestCommonPrefix(strs: string[]): string {
  const arr: string[] = [];
  let x = 0;

  while (true) {
    for (const str of strs)
      if (x >= str.length)
        return arr.join('');

    let c = strs[0][x];

    for (let y = 1; y < strs.length; y++)
      if (strs[y][x] !== c)
        return arr.join('');

    arr.push(c);
    x++;
  }
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it('example 1', () => {
    const input = [ 'flower', 'flow', 'flight' ];
    const output = 'fl';
    expect(longestCommonPrefix(input)).toEqual(output);
  });

  it('example 2', () => {
    const input = [ 'dog', 'racecar', 'car' ];
    const output = '';
    expect(longestCommonPrefix(input)).toEqual(output);
  });

  it('test 1', () => {
    const input = [ 'dog' ];
    const output = 'dog';
    expect(longestCommonPrefix(input)).toEqual(output);
  });

  it('test 2', () => {
    const input = [ '' ];
    const output = '';
    expect(longestCommonPrefix(input)).toEqual(output);
  });
}
