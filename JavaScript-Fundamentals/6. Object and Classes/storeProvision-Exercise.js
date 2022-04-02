function storeProvision(inStock, ordered) {

    let products = {};

    for( let i = 0; i < inStock.length; i+= 2) {
        let product = inStock[i];
        let qty = Number(inStock[i + 1]);

        products[product] = qty;
    }


    for( let i = 0; i < ordered.length; i+= 2) {
        let product = ordered[i];
        let qty = Number(ordered[i + 1]);

        if (products.hasOwnProperty(product)) {
            let currentQty = products[product];
            qty += currentQty;
        } 

        products[product] = qty;
    }

    Object.keys(products).forEach(key => {
        console.log(`${key} -> ${products[key]}`)
    })
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);