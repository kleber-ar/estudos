const sum = require('./script')

test('Teste de soma', () => {
    expect(sum(2, 3)).toBe(5);
});