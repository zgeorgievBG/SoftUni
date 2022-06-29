function isSymmetric(arr) {
    if (!Array.isArray(arr)){
        return false; // Non-arrays are non-symmetric
    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

const expect = require('chai').expect;

describe('isSymmetric', () => {
    it('return true for symmetric input', () => {
        expect(isSymmetric([1,1])).to.be.equal(true);
    });
    it('return false for valid non symmetric input', () => {
        expect(isSymmetric([1,2])).to.be.equal(false);
    });
    it('return false for invalid argument', () => {
        expect(isSymmetric('a')).to.be.equal(false);
    });
    it('return false for non symmetric input', () => {
        expect(isSymmetric([1,'1'])).to.be.equal(false);
    });


    //test overloading

    it('return true for valid symmetric odd-element array', () => {
        expect(isSymmetric([1,1,1])).to.be.equal(true);
    });

    it('return true for valid symmetric string array', () => {
        expect(isSymmetric(['a', 'a'])).to.be.equal(true);
    });

    it('return false for invalid symmetric string array', () => {
        expect(isSymmetric(['a', 'b'])).to.be.equal(false);
    });


})