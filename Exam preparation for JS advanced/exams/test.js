const obj = {
    numberChecker: function(num) {

        num = Number(num);

        if(isNaN(num)) {
            throw new Error('Zlati');
        }
    }
}

const expect = require('chai').expect

describe('', () => {
    it('sum', () => {
        expect(obj.numberChecker.bind(obj, 'a')).to.throw('Zlati')
    })
})