describe('Math calculation', () => {
  it('adds two numbers', () => {
    const result = 2 + 2;
    expect(result).toBe(4);
  });

  it('subtracts two numbers', () => {
    const result = 4 - 2;
    expect(result).toBe(2);
  });

  it('multiplies two numbers', () => {
    const result = 2 * 3;
    expect(result).toBe(6);
  });

  it('divides two numbers', () => {
    const result = 6 / 2;
    expect(result).toBe(3);
  });
});