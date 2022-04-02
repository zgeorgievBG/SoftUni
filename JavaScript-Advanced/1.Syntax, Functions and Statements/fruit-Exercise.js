function solve(product, qty, pricePerKilo) {

    qty = qty / 1000
    let price = qty * pricePerKilo;

    console.log(`I need $${price.toFixed(2)} to buy ${qty.toFixed(2)} kilograms ${product}.`)

}

solve('orange', 2500, 1.80)