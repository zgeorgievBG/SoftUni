function solve(number) {

    let numToString = number.toString().split('').map(Number).reduce((c, a) => c + a, 0);
    console.log(numToString)

}


solve(245678)
solve(97561)
solve(543)