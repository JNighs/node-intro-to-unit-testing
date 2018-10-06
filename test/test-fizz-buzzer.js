const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function () {
    it('should return fizz if number is divisble by 3, buzz if by 5, and fizz-buzz if both', function () {
        const normalCases = [
            { num: 2, expected: 2 },
            { num: 3, expected: 'fizz' },
            { num: 5, expected: 'buzz' },
            { num: 15, expected: 'fizz-buzz' }
        ];

        normalCases.forEach(input => {
            const answer = fizzBuzzer(input.num);
            expect(answer).to.equal(input.expected);
        });

    });

    it('should raise error if arg is not a number', function () {
        const badInputs = [
            'Z',
            false,
            object = {}
        ]

        badInputs.forEach(input => {
            expect(function () {
                fizzBuzzer(input);
            }).to.throw(Error);
        });
    })
});