function solve(n, k) {

    let array = [1];
 
    while(array.length < n) {
        let sum = array.slice(-k).reduce((a, c ) => a + c,0);
        array.push(sum);

    }
    console.log(array.join(' '))
}

solve(6, 3)
solve(8, 2)