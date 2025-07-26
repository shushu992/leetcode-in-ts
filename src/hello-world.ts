function greet(name: string): string {
  return `Hello ${ name }!`;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it('should contain the name', () => {
    const name = Date.now().toString();
    expect(greet(name)).toContain(name);
  });
}
