const suma = require('./suma');

test('5 + 5 = 10', () => {
    expect(suma(5,5)).toBe(10);
});
