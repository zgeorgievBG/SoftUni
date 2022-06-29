class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget
    }

    set budget(value) {
        if(value < 0) {
            throw new Error('The budget cannot be a negative number')
        } else {
            this._budget = value;
        }
    }

    shopping([product, price])  {
            if(price > this.budget) {
                throw new Error('Not enough money to buy this product')
            } 

            this.products.push(product);
            this._budget -= price;
    }

    recipes({recipeName, productsList}) {

        productsList.map(prod => {
            if(!this.products.includes(prod)) {
                throw new Error ('We do not have this product');
            } 
        })

        this.dishes.push({ recipeName, productsList})
        return `${recipeName} has been successfully cooked!`

    }

    inviteguestss(name, dish) {
        const result = this.dishes.find(d => d.recipeName === dish);
        
        if(!result) {
            return 'We do not have this dish'
        }

        if(this.guests.hasOwnProperty(name)) {
            return 'This guests has already been invited';
        }

        this.guests[name] = result;
        return `You have successfully invited ${name}!`

    }

    showAttendance() {

        const result = [];
       Object.entries(this.guests).map(guest => {
        result.push(`${guest[0]} will eat ${guest[1].recipeName}, which consists of ${guest[1].productsList.join(', ')}`)
       })

       return result.join('\n')
      
    }



}

let dinner =new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);
dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});

dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteguestss('Ivan', 'Oshav');
dinner.inviteguestss('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteguestss('Georgi', 'Peppers filled with beans');
console.log(dinner.showAttendance());


