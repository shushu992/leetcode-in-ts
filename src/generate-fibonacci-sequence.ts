/**
 * https://leetcode.com/problems/generate-fibonacci-sequence/
 */
function* fibGenerator(): Generator<number, any, number> {
  let x = -1;
  let y = 1;

  while (true) {
    let z = x + y;

    x = y;
    y = z;

    yield z;
  }
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it('example 1', () => {
    const gen = fibGenerator();

    expect(gen.next().value).toEqual(0);
    expect(gen.next().value).toEqual(1);
    expect(gen.next().value).toEqual(1);
    expect(gen.next().value).toEqual(2);
    expect(gen.next().value).toEqual(3);
  });
}
