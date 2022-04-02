function solve(array) {

    let result = array.filter((n, index) => index % 2 !== 0).reverse().map(num => num * 2).join(' ');
   return result;

}

solve([10, 15, 20, 25])
solve([3, 0, 10, 4, 7, 3])