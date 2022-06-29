function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

const expect = require('chai').expect;

describe('check string', () => {
    it('check if the input is string', () => {
        expect(isOddOrEven(1)).to.be.undefined
    })
    it('check if the input "a" is odd', () => {
        expect(isOddOrEven('a')).to.be.equal('odd')
    })
    it('check if the input "aa" is even', () => {
        expect(isOddOrEven('aa')).to.be.equal('even')
    })
    it('check if the empty string is even', () => {
        expect(isOddOrEven('')).to.be.equal('even')
    })
})