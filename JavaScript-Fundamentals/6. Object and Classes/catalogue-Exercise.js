function solve(productsArray) {
  let mainObj = {};

  for (let line of productsArray) {
    let [product, price] = line.trim().split(" : ");
    price = Number(price);
  }

  console.log(mainObj);

}

solve([
  "Appricot : 20.4",
  " Fridge : 1500",
  " TV : 1499",
  "Deodorant : 10",
  "  Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "  T-Shirt : 10",
]);
