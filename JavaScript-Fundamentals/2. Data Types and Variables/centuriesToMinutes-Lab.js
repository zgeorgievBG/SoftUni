function solve(input) {
  let yearsInCentury = input * 100;
  let totalDays = 0;
  let days = 0;
  for (let year = 1; year <= yearsInCentury; year++) {
    if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
      days++;
    } else {
      days = 365;
    }
    totalDays += days;
  }

  let hours = totalDays * 24
  let minutes = hours * 60;

  console.log(`${input} centuries = ${yearsInCentury} years = ${totalDays} days = ${hours} hours = ${minutes} minutes`);
}

solve(1);
solve(5);
