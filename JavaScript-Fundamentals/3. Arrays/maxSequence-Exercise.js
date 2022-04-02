function solve(array) {


    let finalResult = [];

    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];
        let currentLength = [];
        currentLength.push(currentNumber);
        for (let n = i + 1; i < array.length; n++) {
            if (currentNumber == array[n]) {
                currentLength.push(array[n]);
            } else {
                if (finalResult.length < currentLength.length) {
                    finalResult = currentLength.slice();
                }
                break;
            }
        }
    }
    console.log(finalResult.join(' '));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);