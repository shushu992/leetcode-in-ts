/**
 * https://leetcode.com/problems/add-binary/
 *
 * 1 <= a.length, b.length <= 10^4
 * a and b consist only of '0' or '1' characters.
 * Each string does not contain leading zeros except for the zero itself.
 */
function addBinary(a: string, b: string): string {
  const len = Math.max(a.length, b.length);
  const arr = new Array<number>(len);

  let carry = 0;

  for (let i = 0; i < len; i++) {
    const c1 = a[a.length - 1 - i] === '1' ? 1 : 0;
    const c2 = b[b.length - 1 - i] === '1' ? 1 : 0;

    const sum = c1 + c2 + carry;
    switch (sum) {
      case 0:
        arr.push(0);
        break;
      case 1:
        arr.push(1);
        carry = 0;
        break;
      case 2:
        arr.push(0);
        carry = 1;
        break;
      case 3:
        arr.push(1);
        carry = 1;
        break;
    }
  }

  if (carry === 1) {
    arr.push(1);
  }

  return arr.reverse().join('');
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it('example 1', () => {
    expect(addBinary('11', '1')).toEqual('100');
  });

  it('example 2', () => {
    expect(addBinary('1010', '1011')).toEqual('10101');
  });

  it('test 1', () => {
    expect(addBinary('0', '0')).toEqual('0');
  });

  it('test 2', () => {
    expect(addBinary('0', '1')).toEqual('1');
  });

  it('test 3', () => {
    expect(addBinary('1', '0')).toEqual('1');
  });

  it('test 4', () => {
    expect(addBinary('1', '1')).toEqual('10');
  });
}
