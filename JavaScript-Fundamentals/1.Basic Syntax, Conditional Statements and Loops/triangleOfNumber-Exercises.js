function printNumber(input) {



    for (let i = 1; i <= input; i++) {
        let result = '';
        for (let j = 1; j <= i; j++) {
            result += i + ' ';
        }
        console.log(result);
    }

}


printNumber(6)