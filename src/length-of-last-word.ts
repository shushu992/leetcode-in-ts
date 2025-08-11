/**
 * https://leetcode.com/problems/length-of-last-word/
 *
 * 1 <= s.length <= 10^4
 * s consists of only English letters and spaces ' '.
 * There will be at least one word in s.
 */
function lengthOfLastWord(s: string): number {
  let len = 0;

  for (let i = s.length - 1;
       i >= 0;
       i--) {
    if (s[i] !== ' ') {
      len++;
    } else if (len > 0) {
      return len;
    }
  }

  return len;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it('example 1', () => {
    expect(lengthOfLastWord('Hello World')).toEqual(5);
  });

  it('example 2', () => {
    expect(lengthOfLastWord('   fly me   to   the moon  ')).toEqual(4);
  });

  it('example 3', () => {
    // noinspection SpellCheckingInspection
    expect(lengthOfLastWord('luffy is still joyboy')).toEqual(6);
  });

  it('test 1', () => {
    expect(lengthOfLastWord('a')).toEqual(1);
  });

  it('test 2', () => {
    expect(lengthOfLastWord(' a')).toEqual(1);
  });

  it('test 3', () => {
    expect(lengthOfLastWord('a ')).toEqual(1);
  });

  it('test 4', () => {
    expect(lengthOfLastWord(' a ')).toEqual(1);
  });
}
