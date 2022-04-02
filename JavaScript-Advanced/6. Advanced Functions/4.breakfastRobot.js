function solution() {

  const commands = {
    restock: (product, qty) => {
        products[product] += qty;
        return `Success`
    },
    prepare: (product, qty) => {
        let isPrepared = true;
        const neededingredients = recipies[product];

        for( let i = 0; i < qty; i++) {
            
            for (let ingredient in neededingredients) {
                if (!products[ingredient] || products[ingredient] < neededingredients[ingredient]) {
                    isPrepared = false;
                    return  `Error: not enough ${ingredient} in stock`
                }
            }
            for (let ingredient in neededingredients) {
                products[ingredient] -= neededingredients[ingredient];
                }
        }

        if(isPrepared) {
            return `Success`
        }
    },
    report: () => {
    return Object.entries(products).map(line => `${line[0]}=${line[1]}`).join(' ')
    },
  };

  const recipies = {
    'apple': {
      'carbohydrate': 1,
      'flavour': 2,
    },
    'lemonade': {
      'carbohydrate': 10,
      'flavour': 20,
    },
    'burger': {
      'carbohydrate': 5,
      'fat': 7,
      'flavour': 3,
    },
    'eggs': {
      'protein': 5,
      'fat': 1,
      'flavour': 1,
    },
    'turkey': {
      'protein': 10,
      'carbohydrate': 10,
      'fat': 10,
      'flavour': 10,
    },
  };

  const products = {
    'protein': 0,
    'carbohydrate': 0,
    'fat': 0,
    'flavour': 0
  };

  return function add(input) {
    const tokens = input.split(" ");
    const command = tokens[0];
    const product = tokens[1];
    const qty = Number(tokens[2]);
    const result = commands[command](product, qty);

    return result;
  };
}

let manager = solution ();
console.log(manager("restock protein 40"));
console.log(manager("restock carbohydrate 40"));
console.log(manager("restock fat 40"));
console.log(manager("restock flavour 40"));
console.log(manager("prepare turkey 4"));
console.log(manager("report"));


// let manager = solution ();
// console.log(manager("restock carbohydrates 10"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare apple 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare burger 1"));
// console.log(manager("report"));











