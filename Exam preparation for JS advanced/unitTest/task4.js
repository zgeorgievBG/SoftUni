function sum(arr) {
    let sum = 0;
    for (let num of arr){
        sum += Number(num);
    }
    return sum;
}


const expect = require('chai').expect;


describe('check sum', ()=> {
    it('sum two numbers', ()=> {
        expect(sum([1,1])).to.be.equal(2)
    })
    it('sum multiple numbers', ()=> {
        expect(sum([1,1, 2])).to.be.equal(4)
    })
})