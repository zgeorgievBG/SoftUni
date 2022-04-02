function solve(a, b) {
    let sum = 0;
    a = Number(a);
    b = Number(b);
    for (let i = b; i >= a; i--) {

        sum += Number(i);
    }

    return sum;
    
}

console.log(solve('-8', '20'))