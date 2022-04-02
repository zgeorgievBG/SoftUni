function maxNumbers(array) {

    let result = [];
    let currentNumber = array.shift();

    while (currentNumber !== undefined) {
        let isBigger = true;
        for (let i = 0; i <= array.length; i++) {
            if (currentNumber <= array[i]) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            result.push(currentNumber);
        }
        currentNumber = array.shift();
    }
    console.log(result.join(' '));
}

maxNumbers([1, 4, 3, 2]);
maxNumbers([14, 24, 3, 19, 15, 17]);
maxNumbers([27, 19, 42, 2, 13, 45, 48]);
maxNumbers([41, 41, 34, 20]);