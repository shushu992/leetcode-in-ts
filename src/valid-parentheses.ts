/**
 * https://leetcode.com/problems/valid-parentheses/
 *
 * 1 <= s.length <= 104
 * s consists of parentheses only '()[]{}'
 */
function isValid(s: string): boolean {
  const stack: ('(' | ')' | '[' | ']' | '{' | '}')[] = [];

  for (const c of s) {
    switch (c) {
      case '(':
        stack.push('(');
        continue;
      case ')':
        if (stack.pop() !== '(')
          return false;
        continue;
      case '[':
        stack.push('[');
        continue;
      case ']':
        if (stack.pop() !== '[')
          return false;
        continue;
      case '{':
        stack.push('{');
        continue;
      case '}':
        if (stack.pop() !== '{')
          return false;
        continue;
      default:
        return false;
    }
  }

  return stack.length === 0;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it('example 1', () => {
    expect(isValid('()')).toEqual(true);
  });

  it('example 2', () => {
    expect(isValid('()[]{}')).toEqual(true);
  });

  it('example 3', () => {
    expect(isValid('(]')).toEqual(false);
  });

  it('example 4', () => {
    expect(isValid('([])')).toEqual(true);
  });

  it('example 5', () => {
    expect(isValid('([)]')).toEqual(false);
  });
}
