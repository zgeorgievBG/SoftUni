function bomb(array1, array2) {

    let bombNumber = array2[0];
    let explodePower = array2[1];
    let index = array1.indexOf(bombNumber);

    while ( index > -1 ) {

        array1.splice(Math.max((index - explodePower), 0), Math.min(explodePower, index));
        index = array1.indexOf(bombNumber);
        array1.splice( index, (explodePower + 1));
        index = array1.indexOf(bombNumber);
    }

    calculate(array1);

    function calculate(arr) {

        let sum = 0;

        for ( let element of array1) {
            sum += element;
        }
        return sum;
    }
    
    console.log(calculate());
}

bomb([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1])