function solve(array1, array2) {

    let newArray = array1.slice(0, Number(array2[0]))
    newArray.splice(0,Number(array2[1]))
    let result = newArray.filter(n => n == Number(array2[2]));

    console.log(`Number ${array2[2]} occurs ${result.length} times.`)

}

solve([5, 1, 3,3, 1, 6],
    [5, 2, 3]
    );
solve([7, 1, 5, 8, 2, 7],
    [3, 1, 5])