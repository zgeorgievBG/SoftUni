function solve(array) {

 let firstSum = array.filter(n => n % 2 == 0).reduce((a, c) => c + a, 0);
 let secondSum = array.filter(n => n % 2 !== 0).reduce((a, c) => c + a, 0);

 console.log(firstSum - secondSum)

}

solve([1,2,3,4,5,6])
solve([3,5,7,9])
solve([2,4,6,8,10])