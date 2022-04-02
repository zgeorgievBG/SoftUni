function solve(array) {

    let k = array.shift();

    let firstKElements = array.slice(0, k);
    let lastKElements = array.slice(-k);
    console.log(
`${firstKElements.join(' ')}
${lastKElements.join(' ')}`)

}

solve([2, 
    7, 8, 9])