function solve(input) {

    let storage = new Map();

    input.map(line => {
        let [product,qty] = line.split(' ');
        qty = Number(qty);

        if(storage.has(product)) {
            let existing = storage.get(product);
            storage.set(product, existing + qty)
        } else {
            storage.set(product, qty);
        }

    })


   Array.from(storage)
   .map(x => console.log(`${x[0]} -> ${x[1]}`));


}

solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])