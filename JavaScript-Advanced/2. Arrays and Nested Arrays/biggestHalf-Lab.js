function solve(array) {

    let middle = Math.floor(array.length / 2)
    let result = array.sort((a,b) => a - b).slice(middle);  
    return result;
}

solve([4, 7, 2, 5])
solve([3, 19, 14, 7, 2, 19, 6])