function solve(array) {

    let currentBig = Number.MIN_SAFE_INTEGER;
    let filtered = []

    array.map(n => {
        if (n >= currentBig) {
            filtered.push(n);
            currentBig = n;
        }
    })

    return filtered;
}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]);