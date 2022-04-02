function solve(distance, passengers, priceOfDiesel) {

    let needeFuel = (distance / 100) * 7;
    needeFuel += passengers * 0.100; 
    let money = needeFuel * priceOfDiesel;

    console.log(`Needed money for that trip is ${money} lv.`)
}

solve(90, 14, 2.88);
solve(260, 9, 2.49);