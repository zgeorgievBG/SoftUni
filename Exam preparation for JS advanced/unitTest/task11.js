let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

const expect = require('chai').expect

describe('check addFive function', () => {
    it('input is not a number(string)', () => {
        expect(mathEnforcer.addFive('a')).to.be.undefined
    })
    it('input is not a number(array)', () => {
        expect(mathEnforcer.addFive([])).to.be.undefined
    })
    it('input is not a number(object)', () => {
        expect(mathEnforcer.addFive({})).to.be.undefined
    })
    it('input is a number(5)', () => {
        expect(mathEnforcer.addFive(5)).to.be.equal(10)
    })
    it('input is a number(1.2)', () => {
        expect(mathEnforcer.addFive(1.2)).to.be.equal(6.2)
    })
    it('input is a number(-1.2)', () => {
        expect(mathEnforcer.addFive(-1.2)).to.be.equal(3.8)
    })
})
describe('check subtractTen function', () => {
    it('input is not a number(string)', () => {
        expect(mathEnforcer.subtractTen('a')).to.be.undefined
    })
    it('input is not a number(array)', () => {
        expect(mathEnforcer.subtractTen([])).to.be.undefined
    })
    it('input is not a number(object)', () => {
        expect(mathEnforcer.subtractTen({})).to.be.undefined
    })
    it('input is a number(10)', () => {
        expect(mathEnforcer.subtractTen(10)).to.be.equal(0)
    })
    it('input is a number(1.2)', () => {
        expect(mathEnforcer.subtractTen(1.2)).to.be.equal(-8.8)
    })
    it('input is a number(-1.2)', () => {
        expect(mathEnforcer.subtractTen(-1)).to.be.equal(-11)
    })
})
describe('check sum function', () => {
    it('input is not a number(string)', () => {
        expect(mathEnforcer.sum('a', 1)).to.be.undefined
    })
    it('input is not a number(array)', () => {
        expect(mathEnforcer.sum(1, 'a')).to.be.undefined
    })
    it('both params are numbers', () => {
        expect(mathEnforcer.sum(1,2)).to.be.equal(3)
    })
    it('both params are numbers', () => {
        expect(mathEnforcer.sum(1.2, 2.2)).to.be.equal(3.4000000000000004)
    })
    it('both params are numbers', () => {
        expect(mathEnforcer.sum(-1, -2)).to.be.equal(-3)
    })

})