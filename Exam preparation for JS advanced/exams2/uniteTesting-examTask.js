let dealership = {
  newCarCost: function (oldCarModel, newCarPrice) {
    let discountForOldCar = {
      AudiA4B8: 15000,
      AudiA64K: 20000,
      AudiA8D5: 25000,
      AudiTT8J: 14000,
    };

    if (discountForOldCar.hasOwnProperty(oldCarModel)) {
      let discount = discountForOldCar[oldCarModel];
      let finalPrice = newCarPrice - discount;
      return finalPrice;
    } else {
      return newCarPrice;
    }
  },

  carEquipment: function (extrasArr, indexArr) {
    let selectedExtras = [];
    indexArr.forEach((i) => {
      selectedExtras.push(extrasArr[i]);
    });

    return selectedExtras;
  },

  euroCategory: function (category) {
    if (category >= 4) {
      let price = this.newCarCost("AudiA4B8", 30000);
      let total = price - price * 0.05;
      return `We have added 5% discount to the final price: ${total}.`;
    } else {
      return "Your euro category is low, so there is no discount from the final price!";
    }
  },
};


const expect = require('chai').expect;


describe('dealership', () => {
    describe('newCarCost function' , () => {
        it('check discount', () => {
            expect(dealership.newCarCost('AudiA4B8', 30000)).to.be.equal(15000)
        })
    })
    describe('carEquipment function' , () => {
        it('check extras', () => {
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'leather interior', 'start stop button'], [0])).to.be.deep.equal(['heated seats'])
        })
        it('check extras', () => {
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'leather interior', 'start stop button'], [2,4])).to.be.deep.equal(['sport rims', 'start stop button'])
        })
    })
    describe('euroCategory function' , () => {
        it('category under 4', () => {
            expect(dealership.euroCategory(3)).to.be.equal(`Your euro category is low, so there is no discount from the final price!`)
        })
        it('category over 4', () => {
            expect(dealership.euroCategory(5)).to.be.equal(`We have added 5% discount to the final price: 14250.`)
        })
            it('category is 4', () => {
            expect(dealership.euroCategory(4)).to.be.equal(`We have added 5% discount to the final price: 14250.`)
        })
    })
})
