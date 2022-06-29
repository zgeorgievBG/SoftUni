function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

const expect = require('chai').expect;

describe('Char Look UP', () => {
    it('typeof input !== from string', () => {
        expect(lookupChar(1,1)).to.be.undefined
    })
    it('typeof index !== from number', () => {
        expect(lookupChar('a', 'a')).to.be.undefined
    })
    it('typeof input !== from string', () => {
        expect(lookupChar([], 1)).to.be.undefined
    })
    it('typeof index !== from number', () => {
        expect(lookupChar('a', 1.2)).to.be.undefined
    })
    it('typeof index !== from number', () => {
        expect(lookupChar('1')).to.be.undefined
    })

    it('negative index', () => {
        expect(lookupChar('hello', - 1)).to.be.equal('Incorrect index')
    })
        it('negative index', () => {
        expect(lookupChar('hello', - 1)).to.be.equal('Incorrect index')
    })

    it('index is equal to the string length', () => {
        expect(lookupChar('hello', 5)).to.be.equal('Incorrect index')
    })
    it('index is bigger than string length', () => {
        expect(lookupChar('hello', 6)).to.be.equal('Incorrect index')
    })
    it('correct index, return first letter', () => {
        expect(lookupChar('hello', 0)).to.be.equal('h')
    })
    it('correct index, return middleletter', () => {
        expect(lookupChar('hello', 2)).to.be.equal('l')
    })
    it('correct index, return last letter', () => {
        expect(lookupChar('hello', 4)).to.be.equal('o')
    })
})