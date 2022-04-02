function solve(input) {

    const productsList = {};
 

    class Bottle {
        constructor() {
            this.list = [];
        }

    setQty(product, bottles) {
        if(!this.list[product]) {
            this.list[product] = bottles;
        } else {
            this.list[product] += bottles;
        }
    }
    }


    let result = new Bottle();
    input.map(line => {

        let [juice, qty] = line.split(' => ');
        qty = Number(qty);

        if (!productsList[juice]) {
            productsList[juice] = qty;
        } else {
            productsList[juice] += qty;
        }

        if (productsList[juice] >= 1000) {
            let bottles = Math.floor(productsList[juice] / 1000);
            productsList[juice] -= bottles * 1000;
            result.setQty(juice, bottles);
        }

          
    })

        for( let [key, value] of Object.entries(result)) {
            Object.entries(value).map(el => console.log(`${el[0]} => ${el[1]}`))
        }
}

// solve(['Orange => 2000',
// 'Peach => 1432',
// 'Banana => 450',
// 'Peach => 600',
// 'Strawberry => 549'])

solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])



