function solve(input) {
    let reception = {};
    let totalPrice = 0;
  
    let command = input.shift();
  
    while (command != "end of shift") {
      let pattern =
        /%(?<name>[A-Z][a-z]+)%([^\|\$%\.]+)?<(?<product>[A-Za-z]+)>([^\|\$%\.\d+]+)?\|(?<count>(\d+))([^\|\$%\.\d]+)?\|(?<price>(\d+)(\.\d+)?)\$/g;
      let result = pattern.exec(command);
  
      if (result !== null) {
        let price = Number(result.groups.price) * Number(result.groups.count);
        let product = result.groups.product;
        totalPrice += price;
        reception[result.groups.name] = {
          product,
          price,
        };
      }
      command = input.shift();
    }
  
    Object.entries(reception).map((x) => {
      console.log(`${x[0]}: ${x[1].product} - ${x[1].price.toFixed(2)}`);
    });
    console.log(`Total income: ${totalPrice.toFixed(2)}`);
  }

  solve(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift',
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']
    )