/**
 * https://leetcode.com/problems/check-if-object-instance-of-class/description/
 */
function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  let p: any = obj;

  // noinspection JSAssignmentUsedAsCondition
  while (p = p?.__proto__) {
    if (p.constructor === classFunction) {
      return true;
    }
  }

  return false;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it('example 1', () => {
    expect(
      checkIfInstanceOf(new Date(), Date)
    ).toEqual(true);
  });

  it('test 1', () => {
    expect(
      checkIfInstanceOf(null, Date)
    ).toEqual(false);
  });

  it('test 2', () => {
    expect(
      checkIfInstanceOf(undefined, Date)
    ).toEqual(false);
  });

  it('test 2', () => {
    expect(
      checkIfInstanceOf(Number(3), Number)
    ).toEqual(true);
  });
}
