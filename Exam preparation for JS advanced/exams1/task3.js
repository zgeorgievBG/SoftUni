let pizzUni = {
  makeAnOrder: function (obj) {
    if (!obj.orderedPizza) {
      throw new Error("You must order at least 1 Pizza to finish the order.");
    } else {
      let result = `You just ordered ${obj.orderedPizza}`;
      if (obj.orderedDrink) {
        result += ` and ${obj.orderedDrink}.`;
      }
      return result;
    }
  },

  getRemainingWork: function (statusArr) {
    const remainingArr = statusArr.filter((s) => s.status != "ready");

    if (remainingArr.length > 0) {
      let pizzaNames = remainingArr.map((p) => p.pizzaName).join(", ");
      let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`;

      return pizzasLeft;
    } else {
      return "All orders are complete!";
    }
  },

  orderType: function (totalSum, typeOfOrder) {
    if (typeOfOrder === "Carry Out") {
      totalSum -= totalSum * 0.1;

      return totalSum;
    } else if (typeOfOrder === "Delivery") {
      return totalSum;
    }
  },
};

const expect = require('chai').expect

describe('pizzUni', () => {
    describe('makeAnOrder function', () => {
        let noOrders = {};
        let onlyCoke = {orderedDrink: 'coke'}
        let onlyPizza = {orderedPizza: 'pizza'};
        let pizzaAndCoke = {orderedPizza: 'pizza', orderedDrink: 'coke'};

        it('empty object', () => {
            expect(pizzUni.makeAnOrder.bind(pizzUni,noOrders)).to.throw('You must order at least 1 Pizza to finish the order.')
        })
        it('order only coke', () => {
            expect(pizzUni.makeAnOrder.bind(pizzUni,onlyCoke)).to.throw('You must order at least 1 Pizza to finish the order.')
        })
        it('order only pizza', () => {
            expect(pizzUni.makeAnOrder(onlyPizza)).to.be.equal(`You just ordered ${onlyPizza.orderedPizza}`)
        })
        it('order pizza and coke', () => {
            expect(pizzUni.makeAnOrder(pizzaAndCoke)).to.be.equal(`You just ordered ${pizzaAndCoke.orderedPizza} and ${pizzaAndCoke.orderedDrink}.`)
        })
        
    }),
        describe('getRemainingWork', () => {

            let pizzaOrder = [{pizzaName:'margarita', status: 'preparing'}, {pizzaName:'hawai', status: 'preparing'}];
            let pizzaOrder1 = [{pizzaName:'margarita', status: 'ready'}, {pizzaName:'hawai', status: 'ready'}];
            let pizzaOrder2 = [{pizzaName:'margarita', status: 'ready'}, {pizzaName:'hawai', status: 'ready'}, {pizzaName:'tuna', status: 'preparing'}, {pizzaName:'beast V2', status: 'preparing'}];
            let pizzaOrder3 = [{pizzaName:'margarita', status: 'notready'}, {pizzaName:'hawai', status: 'notready'}];


        it('two ready pizzas', () => {
            expect(pizzUni.getRemainingWork(pizzaOrder1)).to.be.equal('All orders are complete!')
        })
        it('two preparing pizzas', () => {
            expect(pizzUni.getRemainingWork(pizzaOrder)).to.be.equal(`The following pizzas are still preparing: margarita, hawai.`)
        })
        it('two ready and two prepared pizzas', () => {
            expect(pizzUni.getRemainingWork(pizzaOrder2)).to.be.equal(`The following pizzas are still preparing: tuna, beast V2.`)
        })
    }),

    describe('orderType', () => {
        it('10% discount', () => {
            expect(pizzUni.orderType(100, 'Carry Out')).to.be.equal(90)
        })
        it('full price', () => {
            expect(pizzUni.orderType(100, 'Delivery')).to.be.equal(100)
        })
    })

})