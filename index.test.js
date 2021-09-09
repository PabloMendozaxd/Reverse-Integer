const reverse=require("./index");

describe('reverse', () => {
    test('should reverse a given number while it covers the conditions', () => {
        const expected = reverse(123);
        expect(expected).toBe(321);
    })
})


