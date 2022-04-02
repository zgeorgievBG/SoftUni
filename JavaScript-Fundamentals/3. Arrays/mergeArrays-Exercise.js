function solve(firstArray, secondArray) {

    let mergedArray = [];

    for( let index in firstArray) {
        let result = '';
        if ( index % 2 == 0) {
            result = Number(firstArray[index]) + Number(secondArray[index]);
        } else {
            result = firstArray[index] + secondArray[index];
        }

        mergedArray.push(result);
    }
    console.log(mergedArray.join(' - '));
}

solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);