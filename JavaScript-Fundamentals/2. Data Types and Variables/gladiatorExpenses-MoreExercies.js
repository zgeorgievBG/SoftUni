function solve(fights, helmet, sword, shield, armor) {
  let totalCost = 0;
  let shildBrakesCount = 0;

  for (let i = 1; i <= fights; i++) {
    if (i % 2 == 0) {
      totalCost += helmet;
    }
    if (i % 3 == 0) {
      totalCost += sword;
    }

    if (i % 2 == 0 && i % 3 == 0) {
      totalCost += shield;
      shildBrakesCount++;
      if (shildBrakesCount % 2 == 0) {
        totalCost += armor;
      }
    }


  }

  console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`);
}

solve(7, 2, 3, 4, 5);
solve(23,
    12.50,
    21.50,
    40,
    200)
