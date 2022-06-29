function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}


const expect = require('chai').expect;

describe('createCalculator()', () => {
    let calc = undefined;

    beforeEach(function(){
        calc = createCalculator();
    })

    it('value must be 0', () => {
        const value = calc.get();
        expect(value).to.be.equal(0)
    })

    it('value must be 5 after add function', () => {
        calc.add(2);
        calc.add(3)
        value = calc.get();
        expect(value).to.be.equal(5)
    })

    it('value must be 2 after add function & after test with one negative number', () => {
        calc.add(-1);
        calc.add(3)
        value = calc.get();
        expect(value).to.be.equal(2)
    })
    it('test with one string', () => {
        calc.add('2');
        calc.add(3)
        value = calc.get();
        expect(value).to.be.equal(5)
    })
    it('test with one string letter', () => {
        calc.add('a');
        calc.add(3)
        value = calc.get();
        expect(value).to.be.NaN
    })

    it('subtract with string number', () => {
        calc.subtract('2');
        value = calc.get();
        expect(value).to.be.equal(-2)
    })
    it('subtract with number', () => {
        calc.subtract(5);
        value = calc.get();
        expect(value).to.be.equal(-5)
    })
    it('subtract with string expected NaN', () => {
        calc.subtract('a');
        value = calc.get();
        expect(value).to.be.NaN
    })

})