function sortingNumbers(array) {

   
    let sorteredArray = array.sort((a, b) => b - a);
    let arrayCopy = sorteredArray.slice();
    let resultArray = [];

    for ( let index in sorteredArray) {
            currentIndex = Number(index);
        if ( currentIndex % 2 == 0 ) {
            let number = arrayCopy.shift();
            resultArray.push(number);
        } else {
            let number = arrayCopy.pop();
            resultArray.push(number);
        }
    }

    console.log(resultArray.join(' '));
}

sortingNumbers([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])