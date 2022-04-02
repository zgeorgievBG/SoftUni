function magicSum (array, magicNumber) {

        let arrayWithMagicNumbers = [];
    for ( let i = 0; i < array.length; i++) {

        let currentNum = array[i];

        for (let n = i + 1; n < array.length; n++) {
            let nextNum = array[n];

            if ( currentNum + nextNum == magicNumber) {
                let currentArray = [currentNum, nextNum];
                arrayWithMagicNumbers.push(currentArray);
            }
        }
    }
    
    arrayWithMagicNumbers.map(a => console.log(a.join(' ')));

}

magicSum([1, 7, 6, 2, 19, 23],
    8);
magicSum([14, 20, 60, 13, 7, 19, 8],
    27);
magicSum([1, 2, 3, 4, 5, 6],
    6);