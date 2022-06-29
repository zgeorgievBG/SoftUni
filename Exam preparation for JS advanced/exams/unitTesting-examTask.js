const numberOperations = {
        powNumber: function (num) {
            return num * num;
        },

        numberChecker: function (input) {
            input = Number(input);
    
            if (isNaN(input)) {
                throw new Error('The input is not a number!');
            }
    
            if (input < 100) {
                return 'The number is lower than 100!';
            } else {
                return 'The number is greater or equal to 100!';
    }
        },
        sumArrays: function (array1, array2) {
    
            const longerArr = array1.length > array2.length ? array1 : array2;
            const rounds = array1.length < array2.length ? array1.length : array2.length;
    
            const resultArr = [];
    
            for (let i = 0; i < rounds; i++) {
                resultArr.push(array1[i] + array2[i]);
            }
    
            resultArr.push(...longerArr.slice(rounds));
    
            return resultArr
        }
    };
    

    const expect = require('chai').expect;
    

    describe('powNumber Function', () => {
        it('power the number', () => {
            expect((numberOperations.powNumber(2))).to.be.equal(4)
        })
        it('power the number', () => {
            expect((numberOperations.powNumber(10))).to.be.equal(100)
        })
        it('power the number with negative number', () => {
            expect((numberOperations.powNumber(-4))).to.be.equal(16)
        })
        it('power the number with 0', () => {
            expect((numberOperations.powNumber(0))).to.be.equal(0)
        })
    })

    describe('numberChecker Function', () => {
        it('input number is under 100', () => {
            expect(numberOperations.numberChecker(90)).to.be.equal('The number is lower than 100!')
        })
        it('input value is a string number', () => {
            expect(numberOperations.numberChecker('90')).to.be.equal('The number is lower than 100!')
        })
        it('input number is a floating point number', () => {
            expect(numberOperations.numberChecker(90.9)).to.be.equal('The number is lower than 100!')
        })
        it('input value is a floating point string', () => {
            expect(numberOperations.numberChecker('90.9')).to.be.equal('The number is lower than 100!')
        })
        it('input number is 100', () => {
            expect(numberOperations.numberChecker(100)).to.be.equal('The number is greater or equal to 100!')
        })
        it('input value is a string number', () => {
            expect(numberOperations.numberChecker('100')).to.be.equal('The number is greater or equal to 100!')
        })
        it('input value is a floating point string', () => {
            expect(numberOperations.numberChecker('100.1')).to.be.equal('The number is greater or equal to 100!')
        })
        it('input value is a floating point number', () => {
            expect(numberOperations.numberChecker(100.5)).to.be.equal('The number is greater or equal to 100!')
        })
        it('throw error with string', () => {
            expect(numberOperations.numberChecker.bind(numberOperations, 'a')).to.throw('The input is not a number!')
        })



    }); 

    describe('sumArrays Function', () => {
        it('sum', () => {
            expect(numberOperations.sumArrays([1,1,1],[2,2,2])).to.deep.equal([3,3,3])
        })
        it('sum', () => {
            expect(numberOperations.sumArrays([1],[2])).to.deep.equal([3])
        })
        it('sum', () => {
            expect(numberOperations.sumArrays([1.1],[2.2])).to.deep.equal([3.3000000000000003])
        })
        it('sum', () => {
            expect(numberOperations.sumArrays([-1.1],[-2.2])).to.deep.equal([-3.3000000000000003])
        })
        it('sum', () => {
            expect(numberOperations.sumArrays([-1],[-2])).to.deep.equal([-3])
        })
 
    }); 

