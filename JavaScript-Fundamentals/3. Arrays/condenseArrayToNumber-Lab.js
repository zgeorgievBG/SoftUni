function condenseNumbers(numbers) {
    let sumArr = [];
    let sum = '';

    for (let i = 0; i <= numbers.length - 1; i++) {

       if (numbers.length < 2) {
           console.log(numbers[0]);
           break;
       }

        sumArr[i] = numbers[i] + numbers[i + 1];
        numbers[i] = sumArr[i];

        if ( numbers.length - i == 2 ) {
            i = -1;
            numbers.length -= 1;
        } 

        if (numbers.length == 1 ) {
            sum = numbers + '';
            console.log(sum);
            break;
        }
    }
}

condenseNumbers([2, 10, 3]);
condenseNumbers([5, 0, 4, 1, 2]);
condenseNumbers([1]);
