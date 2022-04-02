function printSum(start, end) {

    let result = [];

    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    console.log(result.join(' '))
    let sum = result.reduce((a, c) => a + c, 0);
    console.log(`Sum: ${sum}`)

}

printSum(5, 10);