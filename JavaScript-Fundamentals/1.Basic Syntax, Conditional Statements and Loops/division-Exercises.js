function division(num) {
  const dividers = [2, 3, 6, 7, 10];

  let result = "";
  let isDivisible = false;

  dividers.map((divider) => {
    let currentResult = num / divider;

    if (Number.isInteger(currentResult)) {
      result = divider;
      isDivisible = true;
    }
  });

  if (isDivisible) {
      console.log(`The number is divisible by ${result}`) 
  } else {
      console.log(`Not divisible`)
  }

    
}

division(30);
division(15);
division(12);
division(1643);
