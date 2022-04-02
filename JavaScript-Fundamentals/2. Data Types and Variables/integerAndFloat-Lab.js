function solve(firstNum, secondNum, thirdNum) {

    let result = firstNum + secondNum + thirdNum;
    
    if (Number.isInteger(result)) {
        console.log(`${result} - Integer`)
    } else {
        console.log(`${result} - Float`)
    }

}

solve(9, 100, 1.1);
solve(100, 200, 303);