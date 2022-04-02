function checkOrders(product, qty) {

    const products = {
        'coffee': 1.50,
        'water': 1.00,
        'coke': 1.40,
        'snacks': 2.00
    }

    let result =  products[product] * qty;
    console.log(result.toFixed(2));
}

let result = checkOrders('water', 5);
console.log(result)