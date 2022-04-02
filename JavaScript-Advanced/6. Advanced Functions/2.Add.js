function solution(num) {

  function add5(number) {
    return (num + number);
  }

  return add5;
}

let add5 = solution(5);

console.log(add5(2));
