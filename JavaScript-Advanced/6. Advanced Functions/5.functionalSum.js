function add(а) {
  let sum = 0;
  sum += а;

  function calc(b) {
    sum += b;
    return calc;
  }
  
  calc.toString = () => sum;

  return calc;
}

console.log(add(1)(6)(-3));
console.log(add(1));
