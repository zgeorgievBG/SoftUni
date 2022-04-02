function solution(num) {

  console.log(findDividers(num));

  function findDividers(n) {
    let count = 1;
    let result = 0;
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      result = n / count;

      if (result % 1 === 0) {
        sum += count;
      }
      count++;

      if (sum == n) {
        return "We have a perfect number!";
      } else if (sum > n) {
        return "It's not so perfect.";
      } else {
        continue;
      }
    }
  }
}

solution(28)
