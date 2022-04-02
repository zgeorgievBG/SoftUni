function solve(number) {
  number = number.toString().split("").map(Number);

  let digit = number[0];

  let filtered = number.filter(num => num == digit);
  let sum = number.reduce((a, c) => a + c, 0);

    if (filtered.length == number.length) {
        console.log(true);
    } else {
        console.log(false);
    }

    console.log(sum)
}

solve(2222222);
solve(1234);
