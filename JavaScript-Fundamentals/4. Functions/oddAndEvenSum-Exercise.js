function solve(num) {

    num = num.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < num.length; i++) {
        currentNumber = Number(num[i]);

        if ( currentNumber % 2 == 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

solve(1000435)
solve(3495892137259234)