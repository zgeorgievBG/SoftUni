function solve(array, startIndex, endIndex) {

if(startIndex < 0) {
    startIndex = 0
}

if(!Array.isArray(array)) {
    return NaN;
}

return array.slice(startIndex, endIndex + 1).reduce((a, c) => a + Number(c), 0);


}

console.log(solve([10, 20, 30, 40, 50, 60], 3, 300))
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))
console.log(solve([10, 'twenty', 30, 40], 0, 2))
console.log(solve([], 1, 2))
console.log(solve('text', 0, 2))