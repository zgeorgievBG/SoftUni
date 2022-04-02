function solve(text) {
  let pattern = /[A-Za-z0-9]+/g;
  let result = text.match(pattern);

  result = result.map(word => word.toUpperCase());

  console.log(result.join(', '))
}

solve('2');
