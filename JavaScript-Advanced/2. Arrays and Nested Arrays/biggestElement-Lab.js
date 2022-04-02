function solve(array) {

    let concatArray = [];

    array.map(arr => concatArray = concatArray.concat(arr));

    let result = concatArray.sort((a,b) => b - a).shift();

    return result;
}

solve([[20, 50, 10],
    [8, 33, 145]])
    solve([[3, 5, 7, 12],
        [-1, 4, 33, 2],
        [8, 3, 0, 4]]
       )