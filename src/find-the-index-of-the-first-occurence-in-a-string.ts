// noinspection SpellCheckingInspection

/**
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 *
 * 1 <= haystack.length, needle.length <= 10^4
 * haystack and needle consist of only lowercase English characters.
 */
function strStr(haystack: string, needle: string): number {
  outer: for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        continue outer;
      }
    }
    return i;
  }
  return -1;
}


if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it('example 1', () => {
    const haystack = 'sadbutsad';
    const needle = 'sad';
    expect(strStr(haystack, needle)).toEqual(0);
  });

  it('example 2', () => {
    const haystack = 'leetcode';
    const needle = 'leeto';
    expect(strStr(haystack, needle)).toEqual(-1);
  });

  it('test 1', () => {
    const haystack = 'a';
    const needle = 'a';
    expect(strStr(haystack, needle)).toEqual(0);
  });

  it('test 2', () => {
    const haystack = 'a';
    const needle = 'b';
    expect(strStr(haystack, needle)).toEqual(-1);
  });

  it('test 3', () => {
    const haystack = 'helloworld';
    const needle = 'wor';
    expect(strStr(haystack, needle)).toEqual(5);
  });

  it('test 3', () => {
    const haystack = 'helloworld';
    const needle = 'helloworld';
    expect(strStr(haystack, needle)).toEqual(0);
  });

  it('wrong answer 1', () => {
    const haystack = 'mississippi';
    const needle = 'issip';
    expect(strStr(haystack, needle)).toEqual(4);
  });
}
